import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/client";
import { ScrapperItem } from "@/types/scrap.type";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const supabase = createClient();
        const groupLink = body.data[0].groupLink;
        const { data: group } = await supabase.from("telegram_groups").select("id").eq("url_group", groupLink).single();

        if (!group) {
            return NextResponse.json(
                { error: "Group not found" },
                { status: 404 }
            );
        }

        const mappedData = body.data.map((item: ScrapperItem) => ({
            group_id: group.id,
            project_name: item.projectName,
            type: item.type,
            date: item.date,
            message_text: item.text,
            message_url: item.messageUrl,
            scraped_at: item.scrapedAt,
        }));

        const { data, error } = await supabase.from("scrap_messages").insert(mappedData).select();

        if (error) {
            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Data successfully saved!", total: data.length, },
            { status: 201 }
        );
    } catch (e) {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}