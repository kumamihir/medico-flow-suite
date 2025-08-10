
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Calendar, Phone, Mail } from 'lucide-react';

interface PatientCardProps {
  patient: {
    id: string;
    name: string;
    age: number;
    gender: string;
    condition: string;
    status: 'stable' | 'monitoring' | 'critical';
    lastVisit: string;
    nextAppointment?: string;
    phone: string;
    email: string;
  };
  onViewDetails: (patientId: string) => void;
}

export function PatientCard({ patient, onViewDetails }: PatientCardProps) {
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'stable': return 'status-normal';
      case 'monitoring': return 'status-caution';
      case 'critical': return 'status-critical';
      default: return 'status-info';
    }
  };

  return (
    <Card className="card-patient animate-fade-in">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-medical-primary-light rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-medical-primary" />
          </div>
          <div>
            <h3 className="text-medical-subtitle">{patient.name}</h3>
            <p className="text-medical-caption">{patient.age} years • {patient.gender}</p>
          </div>
        </div>
        <Badge className={`${getStatusBadgeClass(patient.status)} text-xs px-2 py-1`}>
          {patient.status}
        </Badge>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-medical-caption font-medium">Condition:</span>
          <span className="text-medical-body">{patient.condition}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-medical-caption">Last visit: {patient.lastVisit}</span>
        </div>
        
        {patient.nextAppointment && (
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-medical-primary" />
            <span className="text-medical-caption">Next: {patient.nextAppointment}</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Mail className="h-4 w-4" />
          </Button>
        </div>
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => onViewDetails(patient.id)}
          className="border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white"
        >
          View Details
        </Button>
      </div>
    </Card>
  );
}
