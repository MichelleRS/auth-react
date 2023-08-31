import { createClient } from "@supabase/supabase-js";

// initialize Supabase client
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

export const client = createClient(SUPABASE_URL, SUPABASE_KEY);
