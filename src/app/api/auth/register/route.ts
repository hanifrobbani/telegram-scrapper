import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/client'
import { hashPassword } from '@/lib/auth/password'

export async function POST(request: NextRequest) {
    try {
        const { name, email, password } = await request.json()

        if (!name || !email || !password) {
            return NextResponse.json(
                { error: 'field name, email & password is required' },
                { status: 400 }
            )
        }

        if (password.length < 8) {
            return NextResponse.json(
                { error: 'Password minimum 8 character' },
                { status: 400 }
            )
        }

        const supabase = createClient()

        const { data: existingUser } = await supabase.from('users').select('id').eq('email', email).single()

        if (existingUser) {
            return NextResponse.json(
                { error: 'User already exist' },
                { status: 409 }
            )
        }

        const passwordHash = await hashPassword(password)

        const { data: newUser, error } = await supabase.from('users').insert({ name, email, password: passwordHash }).select('id, name, email').single()

        if (error || !newUser) {

            return NextResponse.json(
                { error: error },
                { status: 500 }
            )
        }

        return NextResponse.json(
            {
                message: 'Register user successfully',
                user: { id: newUser.id, name: newUser.name, email: newUser.email },
            },
            { status: 201 }
        )
    } catch (e) {
        return NextResponse.json(
            { error: e },
            { status: 500 }
        )
    }
}