import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nrzsrizgxqrlztvjaxff.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yenNyaXpneHFybHp0dmpheGZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1NDg1MjIsImV4cCI6MjA0NjEyNDUyMn0.rQFIzXEYIolT1meck0MnwTq6Z7YdAYxk2wWlk0jJ6Fo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
