import { scrapeAnnouncements } from "@/lib/telegram/scrapper"

const result = await scrapeAnnouncements({
  group: "arbitrum",
  dateFrom: new Date("2024-01-01"),
  dateTo: new Date("2024-01-31"),
})