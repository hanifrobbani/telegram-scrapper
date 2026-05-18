import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/client'
import { verifyRefreshToken, signAccessToken, signRefreshToken } from '@/lib/auth/jwt'
import { setAuthCookies } from '@/lib/auth/session'
import { cookies } from 'next/headers'
import bcrypt from 'bcryptjs'

export async function POST() {
    try {
        const cookieStore = await cookies()
        const refreshToken = cookieStore.get('refresh_token')?.value

        if (!refreshToken) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        //verify refresh token (cek signature + expiry)
        let payload
        try {
            payload = await verifyRefreshToken(refreshToken)
        } catch {
            return NextResponse.json({ error: 'Refresh token invalid or already expired' }, { status: 401 })
        }

        const userId = payload.sub as string
        const supabase = createClient()

        const { data: storedTokens } = await supabase.from('refresh_tokens').select('id, token_hash, expires_at').eq('user_id', userId)

        if (!storedTokens || storedTokens.length === 0) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        let matchedToken = null
        for (const stored of storedTokens) {
            const isMatch = await bcrypt.compare(refreshToken, stored.token_hash)
            if (isMatch) {
                matchedToken = stored
                break
            }
        }

        if (!matchedToken) {
            return NextResponse.json({ error: 'Unkonwn refresh token' }, { status: 401 })
        }

        if (new Date(matchedToken.expires_at) < new Date()) {
            await supabase.from('refresh_tokens').delete().eq('id', matchedToken.id)
            return NextResponse.json({ error: 'Refresh token already expired' }, { status: 401 })
        }

        await supabase.from('refresh_tokens').delete().eq('id', matchedToken.id)

        const newAccessToken = await signAccessToken(userId)
        const newRefreshToken = await signRefreshToken(userId)

        const newRefreshTokenHash = await bcrypt.hash(newRefreshToken, 10)
        await supabase.from('refresh_tokens').insert({
            user_id: userId,
            token_hash: newRefreshTokenHash,
            expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        })

        setAuthCookies(newAccessToken, newRefreshToken)

        return NextResponse.json({ message: 'Successfully create new refresh token' })
    } catch {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}