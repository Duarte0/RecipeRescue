import "react-native-url-polyfill/auto"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://tyyvwrjiejlzmdqpwksm.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5eXZ3cmppZWpsem1kcXB3a3NtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NDg1MTEsImV4cCI6MjAyNTIyNDUxMX0.ZLytsmuBf3N1X35bTCo4JxlVjQ6GC1_iczx0G18fglY"

export const supabase = createClient(supabaseUrl, supabaseKey)
