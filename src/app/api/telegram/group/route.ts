import { createClient } from '@/lib/supabase/client'
import { NextResponse } from 'next/server'
import { formTelegramGroup } from '@/types/telegram.type'

export async function GET() {
    const supabase = createClient()

    try {
        const { data, error } = await supabase.from("telegram_groups").select("*")
        if (error) {
            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            )
        }
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: "unexpected error", status: 500 })
    }
}

export async function POST(request: Request) {
    const supabase = createClient()
    const formData: formTelegramGroup = await request.json()

    const requiredFields = [
        formData.title,
        formData.url_group
    ]

    if (requiredFields.some(field => !field?.trim())) {
        return NextResponse.json({
            message: "Data cannot be empty",
            status: 400
        })
    }
    
    try {
        const { data, error } = await supabase.from('telegram_groups').insert(formData).select()
        if (error) {
            return NextResponse.json({ error: error, status: 500 })
        }

        return NextResponse.json({ data: data, status: 201, message: "Success add new group" })
    } catch (error) {
        return NextResponse.json({ error: error, status: 500 })
    }
}