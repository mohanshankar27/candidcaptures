// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tsttmsidunrzrgrenpri.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzdHRtc2lkdW5yenJncmVucHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0ODA0MzgsImV4cCI6MjA1MzA1NjQzOH0.Ct7hJiUOkzRpp7jDd8lHsgHGX1EM7AawT31G12vQ4QI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);