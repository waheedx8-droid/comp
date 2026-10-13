// استيراد مكتبة Supabase من CDN
const SUPABASE_URL = "https://sthvmzkmfifdujdxzujw.supabase.co"; // ضع رابط مشروعك هنا
const SUPABASE_ANON_KEY = "sb_publishable_OWPdd4ardgX3jLJzjmuk1A_C8mNTvhn"; // ضع مفتاح الـ anon العام هنا

// تهيئة عميل Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);