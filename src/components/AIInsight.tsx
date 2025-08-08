import { Brain, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

interface AIInsightProps {
  type: "recommendation" | "alert" | "trend" | "success";
  title: string;
  message: string;
  priority: "high" | "medium" | "low";
  timestamp: string;
}

export const AIInsight = ({ type, title, message, priority, timestamp }: AIInsightProps) => {
  const getIcon = () => {
    switch (type) {
      case "recommendation": return Brain;
      case "alert": return AlertTriangle;
      case "trend": return TrendingUp;
      case "success": return CheckCircle;
    }
  };

  const getColorClass = () => {
    switch (priority) {
      case "high": return "border-red-200 bg-red-50/50";
      case "medium": return "border-yellow-200 bg-yellow-50/50";
      case "low": return "border-green-200 bg-green-50/50";
    }
  };

  const Icon = getIcon();

  return (
    <div className={`medical-card ${getColorClass()} border-l-4`}>
      <div className="flex items-start space-x-4">
        <div className="p-2 rounded-xl bg-white/50">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-gray-900">{title}</h4>
            <span className="text-xs text-gray-500">{timestamp}</span>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">{message}</p>
        </div>
      </div>
    </div>
  );
};