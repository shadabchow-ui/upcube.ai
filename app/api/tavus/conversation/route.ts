import { NextResponse } from "next/server";

export async function POST() {
  const apiKey = process.env.TAVUS_API_KEY;
  const replicaId = process.env.TAVUS_REPLICA_ID;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Tavus API key not configured" },
      { status: 500 },
    );
  }

  if (!replicaId) {
    return NextResponse.json(
      { error: "Tavus replica ID not configured" },
      { status: 500 },
    );
  }

  try {
    const response = await fetch("https://tavusapi.com/v2/conversations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({
        replica_id: replicaId,
        conversation_name: "Ethen Talk",
        properties: {
          max_call_duration: 600,
          participant_audio_enabled: true,
          participant_video_enabled: true,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Tavus API error:", response.status, errorText);
      return NextResponse.json(
        { error: "Failed to create conversation" },
        { status: 502 },
      );
    }

    const data = (await response.json()) as {
      conversation_url?: string;
      conversation_id?: string;
    };

    return NextResponse.json({
      conversation_url: data.conversation_url ?? null,
      conversation_id: data.conversation_id ?? null,
    });
  } catch (error) {
    console.error("Tavus API request failed:", error);
    return NextResponse.json(
      { error: "Failed to create conversation" },
      { status: 502 },
    );
  }
}
