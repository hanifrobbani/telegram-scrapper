import { scrapeChannel } from "@/lib/telegram/scrapper";
import { NextResponse } from "next/server";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { channelUrl, startDate, endDate } = body;

  if (!channelUrl || !startDate || !endDate) {
    return Response.json(
      { error: "channelUrl, startDate, endDate is required" },
      { status: 400 }
    );
  }

  try {
    const data = await scrapeChannel({
      channelUrl,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    });

    return NextResponse.json({ data });
  } catch (error) {
      const message = getErrorMessage(error);
    console.error("[scrape error]", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}