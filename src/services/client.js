import { createClient } from "@supabase/supabase-js";

// initialize Supabase client
export const client = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);
