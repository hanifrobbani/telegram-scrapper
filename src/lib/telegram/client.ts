import { TelegramClient } from "telegram"
import { StringSession } from "telegram/sessions"

const apiId = Number(process.env.TELEGRAM_API_ID)
const apiHash = process.env.TELEGRAM_API_HASH!
const stringSession = new StringSession(process.env.TELEGRAM_SESSION || "")

export const client = new TelegramClient(stringSession, apiId, apiHash, {
  connectionRetries: 5,
})

export async function getConnectedClient(): Promise<TelegramClient> {
  if (!client.connected) {
    await client.connect()
  }
  return client
}