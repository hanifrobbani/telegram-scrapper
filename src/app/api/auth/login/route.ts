import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/client'
import { signAccessToken, signRefreshToken } from '@/lib/auth/jwt'
import { setAuthCookies } from '@/lib/auth/session'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json()

        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email & password required' },
                { status: 400 }
            )
        }

        const normalizedEmail = email.toLowerCase().trim()
        const supabase = createClient()

        const { data: userExist } = await supabase.from('users').select('id, password').eq('email', normalizedEmail).single()

        if (!userExist) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            )
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            userExist.password
        )

        if (!isPasswordValid) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            )
        }

        const accessToken = await signAccessToken(userExist.id)
        const refreshToken = await signRefreshToken(userExist.id)
        const refreshTokenHash = await bcrypt.hash(refreshToken, 10)

        await supabase.from('refresh_tokens').insert({
                user_id: userExist.id,
                token_hash: refreshTokenHash,
                expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
            })

        await setAuthCookies(accessToken, refreshToken)

        return NextResponse.json(
            { message: 'Login successfully' },
            { status: 200 }
        )

    } catch (e) {
        console.error(e)

        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}