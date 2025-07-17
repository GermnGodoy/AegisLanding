import { createClient } from '@supabase/supabase-js'

// These should be set in your environment variables
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types for our database
export interface WaitlistEntry {
  id: string
  email: string
  name?: string
  created_at: string
  updated_at: string
}

// Function to add email to waitlist
export async function addToWaitlist(email: string, name?: string) {
  const { data, error } = await supabase
    .from('waitlist')
    .insert([{ email, name }])
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}

// Function to check if email already exists
export async function checkEmailExists(email: string) {
  const { data, error } = await supabase
    .from('waitlist')
    .select('email')
    .eq('email', email)
    .single()

  if (error && error.code !== 'PGRST116') { // PGRST116 is "not found" error
    throw error
  }

  return !!data
}