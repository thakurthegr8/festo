import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://dypufpafdhdphynspzzr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5cHVmcGFmZGhkcGh5bnNwenpyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NzM0MDk3OSwiZXhwIjoxOTkyOTE2OTc5fQ.IZ8aABtSivhtARLosk5kPUSrbSMitf_y7nQJRw5kXnU"
);
console.log(supabase);
export const uploadFile = async (file) => {
  const { data, error } = await supabase.storage
    .from("image-storage-bucket")
    .upload(`event-poster/${file.name}`, file, {
      cacheControl: "3600",
      upsert: false,
    });
  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }
};

export default supabase;
