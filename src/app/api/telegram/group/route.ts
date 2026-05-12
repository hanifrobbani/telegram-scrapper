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

export async function PUT(request: Request) {
    const supabase = createClient()
    const formData: formTelegramGroup = await request.json()

    try {
        const { data, error } = await supabase.from('telegram_groups').update(formData).eq('id', formData.id)
        if (error) {
            return NextResponse.json({ error: error, status: 500 })
        }

        return NextResponse.json({ data: data, status: 200, message: "Success update group" })
    } catch (error) {
        return NextResponse.json({ error: error, status: 500 })
    }
}

export async function DELETE(request: Request) {
    const supabase = createClient()
    const formData = await request.json()

    const { error } = await supabase.from('telegram_groups').delete().eq('id', formData.id)

    if (error) {
        return NextResponse.json({ error: error, status: 500 })
    }

    return NextResponse.json({ status: 200, message: "Success delete telegram group" })
}