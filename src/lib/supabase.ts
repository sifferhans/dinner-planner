import { createClient } from '@supabase/supabase-js'
import { env as publicEnv } from '$env/dynamic/public'
import { env as privateEnv } from '$env/dynamic/private'

const supabase = createClient(publicEnv.PUBLIC_SUPABASE_URL, privateEnv.PRIVATE_SUPABASE_ANON_KEY)
export default supabase