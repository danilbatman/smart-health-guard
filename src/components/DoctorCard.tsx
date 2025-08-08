import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Video } from "lucide-react";

interface DoctorCardProps {
  name: string;
  specialty: string;
  avatar?: string;
  isOnline: boolean;
  nextAppointment?: string;
}

export const DoctorCard = ({ name, specialty, avatar, isOnline, nextAppointment }: DoctorCardProps) => {
  return (
    <div className="medical-card">
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          <Avatar className="w-12 h-12">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          {isOnline && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{specialty}</p>
          {nextAppointment && (
            <p className="text-xs text-gray-500 mt-1">Следующий прием: {nextAppointment}</p>
          )}
        </div>
      </div>
      
      <div className="flex space-x-2">
        <Button size="sm" variant="outline" className="flex-1 rounded-xl">
          <MessageCircle className="w-4 h-4 mr-2" />
          Чат
        </Button>
        <Button size="sm" variant="outline" className="rounded-xl">
          <Phone className="w-4 h-4" />
        </Button>
        <Button size="sm" variant="outline" className="rounded-xl">
          <Video className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};