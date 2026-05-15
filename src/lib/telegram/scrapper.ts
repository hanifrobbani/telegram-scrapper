import { Api } from "telegram";
import { getConnectedClient } from "./client";

export type AirdropType = "new" | "update";

export interface AirdropMessage {
  id: number;
  projectName: string;
  type: AirdropType;
  date: string;
  text: string;
  replyToId: number | null;
  entities: Api.TypeMessageEntity[];
}

interface ScrapeOptions {
  channelUrl: string;
  startDate: Date;
  endDate: Date;
}

function extractProjectName(
  message: string,
  entities: Api.TypeMessageEntity[]
): string {
  const firstLine = message.split("\n")[0].trim();

  if (entities?.length) {
    const firstLineLength = firstLine.length;
    const boldInFirstLine = entities.find(
      (e): e is Api.MessageEntityBold =>
        e.className === "MessageEntityBold" && e.offset < firstLineLength
    );
    if (boldInFirstLine) {
      return message
        .substring(boldInFirstLine.offset, boldInFirstLine.offset + boldInFirstLine.length)
        .trim();
    }
  }

  return firstLine;
}

function parseChannelInput(channelUrl: string): string {
  const match = channelUrl.match(/(?:t\.me\/|@)?([a-zA-Z0-9_]+)\/?$/);
  if (!match) throw new Error("Format channel URL tidak valid");
  return match[1];
}

// Main scraper
export async function scrapeChannel({
  channelUrl,
  startDate,
  endDate,
}: ScrapeOptions): Promise<AirdropMessage[]> {
  const tg = await getConnectedClient();
  const username = parseChannelInput(channelUrl);

  const startTimestamp = Math.floor(startDate.getTime() / 1000);
  const endTimestamp = Math.floor(endDate.getTime() / 1000);

  const results: AirdropMessage[] = [];
  let offsetId = 0;
  const BATCH_SIZE = 100;

  while (true) {
    const messages = await tg.getMessages(username, {
      limit: BATCH_SIZE,
      offsetId,
    });

    if (!messages || messages.length === 0) break;

    for (const msg of messages) {
      if (!msg.message) continue;

      const msgTimestamp = msg.date;
      if (msgTimestamp > endTimestamp) continue;

      if (msgTimestamp < startTimestamp) return results;

      const entities = (msg.entities ?? []) as Api.TypeMessageEntity[];
      const projectName = extractProjectName(msg.message, entities);
      const replyTo = msg.replyTo as Api.MessageReplyHeader | undefined;

      results.push({
        id: msg.id,
        projectName,
        type: replyTo ? "update" : "new",
        date: new Date(msgTimestamp * 1000).toISOString(),
        text: msg.message,
        replyToId: replyTo?.replyToMsgId ?? null,
        entities,
      });
    }

    offsetId = messages[messages.length - 1].id;
    if (messages.length < BATCH_SIZE) break;
  }

  return results;
}