import { aiQuery } from "@/app/ai/llmQuery";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    const response = await aiQuery(prompt);

    return NextResponse.json({ message: response });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to process request",
        details: error,
      },
      { status: 500 },
    );
  }
}
