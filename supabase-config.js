// استدعاء عميل Supabase العام لجميع صفحات المشروع
const SUPABASE_URL = "https://sthvmzkmfifdujdxzujw.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_OWPdd4ardgX3jLJzjmuk1A_C8mNTvhn";

const dbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
