type Env = {
  OPENAI_API_KEY?: string;
};

const ETHEN_VOICE_INSTRUCTIONS = `You are Ethen, Upcube's AI guide.

Help users understand Upcube products, choose where to start, and navigate the ecosystem.

Speak clearly, warmly, and concisely.
Do not claim unsupported capabilities.
Do not ask for sensitive personal information.`;

type OpenAIRealtimeSessionResponse = {
  client_secret?: {
    value?: string;
    expires_at?: number;
  };
  expires_at?: number;
  session?: {
    id?: string;
    model?: string;
    audio?: {
      output?: {
        voice?: string;
      };
    };
  };
  value?: string;
};

function withCors(headers?: HeadersInit) {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "no-store",
    ...(headers ?? {}),
  };
}

function json(body: unknown, init?: ResponseInit) {
  const headers = new Headers(withCors(init?.headers));
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  return new Response(JSON.stringify(body), {
    ...init,
    headers,
  });
}

async function createRealtimeSession(apiKey: string) {
  return fetch("https://api.openai.com/v1/realtime/client_secrets", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      expires_after: {
        anchor: "created_at",
        seconds: 600,
      },
      session: {
        type: "realtime",
        model: "gpt-realtime",
        instructions: ETHEN_VOICE_INSTRUCTIONS,
        audio: {
          input: {
            format: {
              type: "audio/pcm",
              rate: 24000,
            },
            turn_detection: {
              type: "server_vad",
              create_response: true,
              interrupt_response: true,
            },
          },
          output: {
            format: {
              type: "audio/pcm",
              rate: 24000,
            },
            voice: "marin",
          },
        },
      },
    }),
  });
}

async function handlePost(env: Env) {
  const apiKey = env.OPENAI_API_KEY?.trim();

  if (!apiKey) {
    return json(
      {
        error:
          "Voice mode is not configured in this deployment. Add OPENAI_API_KEY to this Cloudflare Pages environment.",
      },
      { status: 503 },
    );
  }

  try {
    const response = await createRealtimeSession(apiKey);

    if (!response.ok) {
      const errorText = await response.text();
      const requestId = response.headers.get("x-request-id");
      console.error(
        "OpenAI realtime session bootstrap failed:",
        response.status,
        requestId ?? "no-request-id",
        errorText,
      );
      return json(
        {
          error: {
            code: "realtime_session_failed",
            message:
              "Voice mode is unavailable right now. Please try again in a moment.",
            details: {
              status: response.status,
              requestId,
            },
          },
        },
        { status: 502 },
      );
    }

    const data = (await response.json()) as OpenAIRealtimeSessionResponse;
    const clientSecret = data.client_secret?.value ?? data.value ?? null;
    const expiresAt = data.client_secret?.expires_at ?? data.expires_at ?? null;

    if (!clientSecret) {
      console.error(
        "OpenAI realtime bootstrap returned no client secret",
        data,
      );
      return json(
        {
          error: {
            code: "missing_client_secret",
            message:
              "Voice mode could not be prepared. Please try again shortly.",
            details: {
              status: 502,
            },
          },
        },
        { status: 502 },
      );
    }

    return json({
      clientSecret,
      expiresAt,
      session: {
        id: data.session?.id ?? null,
        model: data.session?.model ?? "gpt-realtime",
        voice: data.session?.audio?.output?.voice ?? "marin",
      },
    });
  } catch (error) {
    console.error("OpenAI realtime session route failed:", error);
    return json(
      {
        error: {
          code: "realtime_session_exception",
          message:
            "Voice mode is unavailable right now. Please try again in a moment.",
        },
      },
      { status: 502 },
    );
  }
}

export async function onRequest(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  if (context.request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: withCors(),
    });
  }

  if (context.request.method !== "POST") {
    return json(
      {
        error: "Method Not Allowed",
      },
      {
        status: 405,
        headers: {
          Allow: "POST, OPTIONS",
        },
      },
    );
  }

  return handlePost(context.env);
}
