import { LucideIcon } from "lucide-react";

interface HealthMetricProps {
  title: string;
  value: string;
  unit: string;
  status: "normal" | "warning" | "critical";
  trend: "up" | "down" | "stable";
  icon: LucideIcon;
  lastUpdated: string;
}

export const HealthMetric = ({ 
  title, 
  value, 
  unit, 
  status, 
  trend, 
  icon: Icon,
  lastUpdated 
}: HealthMetricProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal": return "text-green-600";
      case "warning": return "text-yellow-600";
      case "critical": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return "↗";
      case "down": return "↘";
      case "stable": return "→";
      default: return "→";
    }
  };

  return (
    <div className="metric-card group">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-2xl bg-white/30">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <span className={`text-sm font-medium ${getStatusColor(status)}`}>
          {getTrendIcon(trend)}
        </span>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        <div className="flex items-baseline space-x-1">
          <span className="text-3xl font-bold text-gray-900">{value}</span>
          <span className="text-sm text-gray-500">{unit}</span>
        </div>
        <p className="text-xs text-gray-500">Обновлено {lastUpdated}</p>
      </div>
    </div>
  );
};