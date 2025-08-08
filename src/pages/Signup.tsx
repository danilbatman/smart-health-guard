import { FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { createClient } from "@supabase/supabase-js";

const tryCreateSupabase = () => {
  try {
    const w = window as any;
    const url = w.__SUPABASE_URL || w.SUPABASE_URL;
    const key = w.__SUPABASE_ANON_KEY || w.SUPABASE_ANON_KEY;
    if (url && key) {
      return createClient(url, key);
    }
  } catch (e) {
    // noop
  }
  return null;
};

const Signup = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation() as any;
  const [name, setName] = useState("");
  const [email, setEmail] = useState(location?.state?.email || "");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const supabase = useMemo(() => tryCreateSupabase(), []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!supabase) {
      toast({
        title: "Требуется подключение Supabase",
        description: "Подключите Supabase в проекте (кнопка вверху справа), затем мы активируем регистрацию.",
      });
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { name } },
      });
      if (error) throw error;
      toast({ title: "Проверьте почту", description: "Мы отправили письмо для подтверждения." });
      navigate("/app");
    } catch (err: any) {
      toast({ title: "Ошибка регистрации", description: err?.message || "Повторите попытку позже." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-6">
      <Helmet>
        <title>Регистрация — MedCare AI</title>
        <meta name="description" content="Создайте аккаунт MedCare AI для удаленного мониторинга здоровья и ИИ‑аналитики." />
        <link rel="canonical" href="/signup" />
      </Helmet>

      <main className="max-w-xl mx-auto space-y-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold gradient-text">Создать аккаунт</h1>
          <p className="text-gray-600 mt-2">Бесплатно, занимает меньше минуты</p>
        </header>

        <form onSubmit={onSubmit} className="medical-card space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Имя</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border bg-white/50 px-3 py-2 outline-none"
              placeholder="Иван Иванов"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border bg-white/50 px-3 py-2 outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Пароль</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border bg-white/50 px-3 py-2 outline-none"
              placeholder="••••••••"
              minLength={6}
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full gradient-button rounded-xl">
            {loading ? "Создаём..." : "Зарегистрироваться"}
          </Button>

          <div className="text-center text-sm text-gray-600">
            Уже есть аккаунт? <Link to="/app" className="story-link">Перейти в приложение</Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Signup;
