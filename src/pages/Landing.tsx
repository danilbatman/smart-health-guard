import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Activity,
  Bell,
  Calendar,
  Cpu,
  HeartPulse,
  Plus,
  Shield,
  Smartphone
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const benefits = [
  {
    title: "ИИ-наблюдение 24/7",
    desc: "Анализ глюкозы, давления, пульса и веса с мгновенными алертами врачу.",
    Icon: Cpu,
  },
  {
    title: "Безопасность данных",
    desc: "Медицинский уровень шифрования и контроль доступа.",
    Icon: Shield,
  },
  {
    title: "Лёгкая интеграция",
    desc: "Подключение глюкометра, тонометра и смарт-часов в пару кликов.",
    Icon: Smartphone,
  },
];

const integrations = [
  { name: "Глюкометр", Icon: Activity },
  { name: "Тонометр", Icon: HeartPulse },
  { name: "Смарт-часы", Icon: Bell },
];

const Landing = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen p-4 md:p-6">
      <Helmet>
        <title>MedCare AI — удаленный мониторинг здоровья</title>
        <meta name="description" content="MedCare AI — платформа удаленного мониторинга хронических заболеваний с ИИ‑аналитикой и напоминаниями. Зарегистрируйтесь бесплатно." />
        <link rel="canonical" href="/" />
      </Helmet>

      <header className="medical-card mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold gradient-text">MedCare AI</h1>
            <p className="text-gray-600">Удалённый мониторинг хронических заболеваний</p>
          </div>
          <div className="flex items-center space-x-2">
            <Link to="/app">
              <Button variant="outline" size="sm" className="rounded-xl">Демо</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="gradient-button rounded-xl">Регистрация</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="space-y-12">
        {/* Hero */}
        <section className="medical-card overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Умный мониторинг здоровья с ИИ‑рекомендациями
              </h2>
              <p className="text-gray-600">
                Подключите гаджеты, получайте аналитику и напоминания, а врач увидит критические изменения вовремя.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/signup">
                  <Button size="lg" className="gradient-button rounded-xl">Начать бесплатно</Button>
                </Link>
                <Link to="/app">
                  <Button size="lg" variant="outline" className="rounded-xl">Смотреть демо</Button>
                </Link>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <Bell className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-600">Напоминания о лекарствах и приёмах у врача</span>
              </div>
            </div>
            <div className="medical-card bg-white/40">
              <div className="grid grid-cols-2 gap-4">
                {integrations.map(({ name, Icon }) => (
                  <div key={name} className="metric-card flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/30">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">{name}</p>
                      <p className="text-xs text-gray-500">Поддерживается</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Почему MedCare AI</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {benefits.map(({ title, desc, Icon }) => (
              <article key={title} className="medical-card">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-2xl bg-white/30">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-gray-900">{title}</h4>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA with email */}
        <section className="medical-card">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="flex-1 w-full">
              <h5 className="font-semibold text-gray-900">Получить доступ</h5>
              <p className="text-sm text-gray-600">Оставьте email — пришлём приглашение в систему</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 md:w-72 rounded-xl border bg-white/50 px-3 py-2 outline-none"
                aria-label="Email"
              />
              <Link to="/signup" state={{ email }}>
                <Button className="gradient-button rounded-xl">Зарегистрироваться</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
