import { createClient } from '@supabase/supabase-js'

export const useSupabaseClient = () => {
  const config = useRuntimeConfig()
  
  const supabaseUrl = config.public.supabaseUrl as string
  const supabaseKey = config.public.supabaseKey as string
  
  return createClient(supabaseUrl, supabaseKey)
}
