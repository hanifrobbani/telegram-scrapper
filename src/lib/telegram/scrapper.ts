import { getConnectedClient } from "./client"
import { Api } from "telegram"

export type MessageType = "new_project" | "updated_project"

export type ScrapedMessage = {
  id: number
  text: string
  date: number
  type: MessageType
  replyToId: number | null
  groupName: string
}

export type ScrapeResult = {
  new_project: ScrapedMessage[]
  updated_project: ScrapedMessage[]
  totalFetched: number
  group: string
  dateFrom: Date
  dateTo: Date
}

export type ScrapeParams = {
  group: string      // username grup, contoh: "arbitrum"
  dateFrom: Date
  dateTo: Date
}

export async function scrapeAnnouncements(
  params: ScrapeParams
): Promise<ScrapeResult> {
  const { group, dateFrom, dateTo } = params
  const client = await getConnectedClient()

  const entity = await client.getEntity(group)

  const allMessages: ScrapedMessage[] = []
  let offsetId = 0
  let hasMore = true

  // Loop batch karena Telegram limit 100 per request
  while (hasMore) {
    const batch = await client.getMessages(entity, {
      limit: 100,
      offsetId,
    })

    if (batch.length === 0) break

    for (const msg of batch) {
      // Skip jika bukan pesan teks biasa
      if (!msg.message) continue

      const msgDate = new Date(msg.date * 1000)

      // Sudah melewati batas bawah tanggal, stop loop
      if (msgDate < dateFrom) {
        hasMore = false
        break
      }

      // Skip jika di luar range atas
      if (msgDate > dateTo) continue

      const replyToId = msg.replyTo
        ? (msg.replyTo as Api.MessageReplyHeader).replyToMsgId ?? null
        : null

      allMessages.push({
        id: msg.id,
        text: msg.message,
        date: msg.date,
        type: replyToId ? "updated_project" : "new_project",
        replyToId,
        groupName: group,
      })
    }

    offsetId = batch[batch.length - 1].id
    
    if (batch.length < 100) break

    await sleep(500)
  }

  // 2 list from updated project or new project
  const result: ScrapeResult = {
    new_project: allMessages.filter(m => m.type === "new_project"),
    updated_project: allMessages.filter(m => m.type === "updated_project"),
    totalFetched: allMessages.length,
    group,
    dateFrom,
    dateTo,
  }

  return result
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}