import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/client'

export async function POST(req: NextRequest) {
    try {
        const { email, message } = await req.json()
        const supabase = createClient()

        if (!message || !email) {
            return NextResponse.json(
                { error: 'field email & message is required!' },
                { status: 400 }
            )
        }

        const { data: existingEmail } = await supabase.from('req_access').select('id').eq('email', email).single()

        if (existingEmail) {
            return NextResponse.json(
                { error: 'Request access for this email already exist!' },
                { status: 409 }
            )
        }

        const { data, error } = await supabase.from('req_access').insert({ email, message }).select('id, email').single()
        if (error) {
            console.log(error)
            return NextResponse.json({ error: error }, { status: 500 })
        }

        return NextResponse.json({ data: data, message: "Success send a request access" }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error }, { status: 500 })

    }
}