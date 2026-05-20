import { createClient } from '@/lib/supabase/client'
import { NextResponse } from 'next/server'
import { formTelegramProject } from '@/types/telegram.type'

export async function GET() {
    const supabase = createClient()

    try {
        const { data, error } = await supabase.from("projects").select("*")
        if (error) {
            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            )
        }
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500})
    }
}

export async function POST(request: Request) {
    const supabase = createClient()
    const formData: formTelegramProject = await request.json()

    const requiredFields = [
        formData.project_name,
        formData.url_project,
        formData.type
    ]

    if (requiredFields.some(field => !field?.trim())) {
        return NextResponse.json(
            { message: "Data cannot be empty" },
            { status: 400 }
        )
    }

    try {
        const { data, error } = await supabase.from('projects').insert(formData).select()
        if (error) {
            return NextResponse.json({ error: error }, { status: 500 })
        }

        return NextResponse.json({ data: data, message: "Success add new project" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}

export async function PUT(request: Request) {
    const supabase = createClient()
    const formData: formTelegramProject = await request.json()

    const requiredFields = [
        formData.id,
        formData.project_name,
        formData.url_project,
        formData.type
    ]

    if (requiredFields.some(field => !field?.trim())) {
        return NextResponse.json(
            { message: "Data cannot be empty" },
            { status: 400 }
        )
    }

    try {
        const { data, error } = await supabase.from('projects').update(formData).eq('id', formData.id)
        if (error) {
            return NextResponse.json({ error: error }, { status: 500 })
        }

        return NextResponse.json({ data: data, message: "Success update project" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}

export async function DELETE(request: Request) {
    const supabase = createClient()
    const formData = await request.json()

    const requiredFields = [
        formData.id,
    ]

    if (requiredFields.some(field => !field?.trim())) {
        return NextResponse.json(
            { message: "Data cannot be empty" },
            { status: 400 }
        )
    }

    const { error } = await supabase.from('projects').delete().eq('id', formData.id)

    if (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }

    return NextResponse.json({ message: "Success delete project" }, { status: 200 })
}