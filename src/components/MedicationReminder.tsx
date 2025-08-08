import { Pill, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MedicationReminderProps {
  name: string;
  dosage: string;
  time: string;
  taken: boolean;
  onMarkTaken: () => void;
}

export const MedicationReminder = ({ name, dosage, time, taken, onMarkTaken }: MedicationReminderProps) => {
  return (
    <div className={`medical-card ${taken ? 'bg-green-50/50 border-green-200' : 'bg-white/20'} border-l-4`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-xl ${taken ? 'bg-green-100' : 'bg-white/30'}`}>
            {taken ? (
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            ) : (
              <Pill className="w-5 h-5 text-primary" />
            )}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{dosage}</p>
            <div className="flex items-center space-x-1 mt-1">
              <Clock className="w-3 h-3 text-gray-400" />
              <span className="text-xs text-gray-500">{time}</span>
            </div>
          </div>
        </div>
        
        {!taken && (
          <Button 
            size="sm" 
            onClick={onMarkTaken}
            className="gradient-button rounded-xl"
          >
            Принял
          </Button>
        )}
      </div>
    </div>
  );
};