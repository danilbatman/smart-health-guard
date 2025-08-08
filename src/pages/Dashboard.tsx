import { useState } from "react";
import { HealthMetric } from "@/components/HealthMetric";
import { AIInsight } from "@/components/AIInsight";
import { DoctorCard } from "@/components/DoctorCard";
import { MedicationReminder } from "@/components/MedicationReminder";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Droplets, 
  Weight, 
  Activity, 
  Plus,
  Bell,
  Settings,
  Calendar
} from "lucide-react";

const Index = () => {
  const [medicationsTaken, setMedicationsTaken] = useState<Record<string, boolean>>({});

  const handleMedicationTaken = (medicationId: string) => {
    setMedicationsTaken(prev => ({ ...prev, [medicationId]: true }));
  };

  return (
    <div className="min-h-screen p-4 md:p-6">
      {/* Header */}
      <header className="medical-card mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold gradient-text">MedCare AI</h1>
            <p className="text-gray-600">Платформа удаленного мониторинга здоровья</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="rounded-xl">
              <Bell className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="rounded-xl">
              <Calendar className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="rounded-xl">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Health Metrics */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Показатели здоровья</h2>
              <Button variant="outline" size="sm" className="rounded-xl">
                <Plus className="w-4 h-4 mr-2" />
                Добавить
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <HealthMetric
                title="Артериальное давление"
                value="125/80"
                unit="мм рт.ст."
                status="normal"
                trend="stable"
                icon={Heart}
                lastUpdated="2 часа назад"
              />
              <HealthMetric
                title="Уровень глюкозы"
                value="6.2"
                unit="ммоль/л"
                status="warning"
                trend="up"
                icon={Droplets}
                lastUpdated="30 мин назад"
              />
              <HealthMetric
                title="Вес"
                value="72.5"
                unit="кг"
                status="normal"
                trend="down"
                icon={Weight}
                lastUpdated="1 день назад"
              />
              <HealthMetric
                title="Пульс"
                value="68"
                unit="уд/мин"
                status="normal"
                trend="stable"
                icon={Activity}
                lastUpdated="1 час назад"
              />
            </div>
          </section>

          {/* AI Insights */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">ИИ-рекомендации</h2>
            <div className="space-y-3">
              <AIInsight
                type="alert"
                title="Повышенный уровень глюкозы"
                message="Обнаружено повышение уровня глюкозы после обеда. Рекомендуется проверить дозировку инсулина и обратиться к врачу."
                priority="high"
                timestamp="10 мин назад"
              />
              <AIInsight
                type="recommendation"
                title="Время для физической активности"
                message="Анализ показывает, что легкая прогулка поможет нормализовать уровень сахара в крови."
                priority="medium"
                timestamp="1 час назад"
              />
              <AIInsight
                type="success"
                title="Отличная динамика веса"
                message="За последнюю неделю вес снизился на 0.8 кг. Продолжайте следовать текущему плану питания."
                priority="low"
                timestamp="2 часа назад"
              />
            </div>
          </section>

          {/* Medications */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Напоминания о лекарствах</h2>
            <div className="space-y-3">
              <MedicationReminder
                name="Метформин"
                dosage="500 мг"
                time="08:00"
                taken={medicationsTaken["metformin-morning"] || false}
                onMarkTaken={() => handleMedicationTaken("metformin-morning")}
              />
              <MedicationReminder
                name="Лизиноприл"
                dosage="10 мг"
                time="12:00"
                taken={medicationsTaken["lisinopril-noon"] || false}
                onMarkTaken={() => handleMedicationTaken("lisinopril-noon")}
              />
              <MedicationReminder
                name="Метформин"
                dosage="500 мг"
                time="20:00"
                taken={medicationsTaken["metformin-evening"] || false}
                onMarkTaken={() => handleMedicationTaken("metformin-evening")}
              />
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Doctor */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Ваш врач</h2>
            <DoctorCard
              name="Доктор Анна Петрова"
              specialty="Эндокринолог"
              isOnline={true}
              nextAppointment="Завтра, 14:00"
            />
          </section>

          {/* Quick Actions */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Быстрые действия</h2>
            <div className="space-y-3">
              <Button className="w-full gradient-button rounded-xl justify-start" size="lg">
                <Plus className="w-5 h-5 mr-3" />
                Добавить измерение
              </Button>
              <Button className="w-full secondary-button rounded-xl justify-start" size="lg">
                <Calendar className="w-5 h-5 mr-3" />
                Записаться к врачу
              </Button>
              <Button variant="outline" className="w-full rounded-xl justify-start" size="lg">
                <Heart className="w-5 h-5 mr-3" />
                Экстренная связь
              </Button>
            </div>
          </section>

          {/* Emergency Contact */}
          <div className="medical-card bg-red-50/50 border-red-200 border-l-4">
            <div className="text-center">
              <h3 className="font-semibold text-red-800 mb-2">Экстренная помощь</h3>
              <p className="text-sm text-red-600 mb-3">
                При критических показателях немедленно обратитесь за помощью
              </p>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-xl">
                Вызвать скорую
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
