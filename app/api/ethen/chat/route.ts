import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Ethen, Upcube's AI guide.

Help users understand Upcube products, choose where to start, and navigate the ecosystem.

Be concise, helpful, professional, and clear.
Do not claim unsupported capabilities.
Do not ask for sensitive personal information.

Product areas you can recommend: AI, Cloud, Robotics, Cloud VM, OS, Mobile OS, Voice, Education, Books, Quantum, Earth, News, Games, Commerce, Jobs.`;

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        reply:
          "Ethen is not configured yet. Add your OpenAI API key to get started.",
      },
      { status: 200 },
    );
  }

  try {
    const { message } = (await request.json()) as { message?: string };

    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length === 0
    ) {
      return NextResponse.json(
        { reply: "Please ask me something about Upcube." },
        { status: 200 },
      );
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        input: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
        temperature: 0.7,
        max_output_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI API error:", response.status, errorText);
      return NextResponse.json(
        { reply: "Ehen ran into a hiccup. Please try again." },
        { status: 200 },
      );
    }

    const data = (await response.json()) as {
      output?: { content?: { text?: string }[] }[];
    };

    const reply =
      data?.output?.[0]?.content?.[0]?.text ??
      "I'm not sure how to answer that. Try asking about a specific product area.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Ethen chat API failed:", error);
    return NextResponse.json(
      { reply: "Ehen is unavailable right now. Please try again later." },
      { status: 200 },
    );
  }
}
