import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verifyRefreshToken } from '@/lib/auth/jwt'
import { clearAuthCookies } from '@/lib/auth/session'
import { createClient } from '@/lib/supabase/client'
import bcrypt from 'bcryptjs'

export async function POST() {
    try {
        const cookieStore = await cookies()
        const refreshToken = cookieStore.get('refresh_token')?.value
        
        clearAuthCookies()
        
        const supabase = createClient()

        if (refreshToken) {
            let payload
            try {
                payload = await verifyRefreshToken(refreshToken)
            } catch {
                return NextResponse.json({ message: 'Logged out successfully' })
            }

            const userId = payload.sub as string
            const { data: storedTokens } = await supabase.from('refresh_tokens').select('id, token_hash').eq('user_id', userId)
            console.log(storedTokens)
            if (storedTokens && storedTokens.length > 0) {
                for (const stored of storedTokens) {
                    const isMatch = await bcrypt.compare(refreshToken, stored.token_hash)
                    if (isMatch) {
                        await supabase.from('refresh_tokens').delete().eq('id', stored.id)
                        // console.log("refresh token terhapus")
                        break
                    }
                }
            }
        }

        return NextResponse.json({ message: 'Logged out successfully' })
    } catch {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}