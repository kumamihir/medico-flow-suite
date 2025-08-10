
import React from 'react';
import { StatCard } from '@/components/medical/StatCard';
import { PatientCard } from '@/components/medical/PatientCard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Users, 
  Calendar, 
  Clock, 
  Activity,
  Plus,
  ArrowRight
} from 'lucide-react';

// Mock data
const stats = [
  {
    title: 'Total Patients',
    value: 248,
    change: { value: '+12 this month', trend: 'up' as const },
    icon: Users,
    variant: 'default' as const
  },
  {
    title: 'Today\'s Appointments',
    value: 8,
    change: { value: '2 remaining', trend: 'neutral' as const },
    icon: Calendar,
    variant: 'success' as const
  },
  {
    title: 'Pending Follow-ups',
    value: 12,
    change: { value: '+3 urgent', trend: 'up' as const },
    icon: Clock,
    variant: 'warning' as const
  },
  {
    title: 'Critical Alerts',
    value: 2,
    change: { value: 'Immediate attention', trend: 'up' as const },
    icon: Activity,
    variant: 'critical' as const
  }
];

const recentPatients = [
  {
    id: '1',
    name: 'Sarah Johnson',
    age: 34,
    gender: 'Female',
    condition: 'Hypertension',
    status: 'stable' as const,
    lastVisit: '2024-01-05',
    nextAppointment: '2024-01-20',
    phone: '+1 (555) 123-4567',
    email: 'sarah.j@email.com'
  },
  {
    id: '2',
    name: 'Michael Chen',
    age: 42,
    gender: 'Male',
    condition: 'Diabetes Type 2',
    status: 'monitoring' as const,
    lastVisit: '2024-01-03',
    nextAppointment: '2024-01-15',
    phone: '+1 (555) 234-5678',
    email: 'michael.c@email.com'
  },
  {
    id: '3',
    name: 'Emma Williams',
    age: 67,
    gender: 'Female',
    condition: 'Heart Disease',
    status: 'critical' as const,
    lastVisit: '2024-01-07',
    phone: '+1 (555) 345-6789',
    email: 'emma.w@email.com'
  }
];

const upcomingAppointments = [
  { time: '09:00 AM', patient: 'John Doe', type: 'Consultation' },
  { time: '10:30 AM', patient: 'Lisa Park', type: 'Follow-up' },
  { time: '02:00 PM', patient: 'Robert Smith', type: 'Check-up' },
  { time: '03:30 PM', patient: 'Maria Garcia', type: 'Consultation' }
];

export default function Dashboard() {
  const handleViewPatientDetails = (patientId: string) => {
    console.log('Viewing patient details for:', patientId);
    // Navigation to patient details would go here
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-medical-title">Dashboard</h1>
          <p className="text-medical-body text-muted-foreground">
            Overview of your practice today
          </p>
        </div>
        <Button className="bg-medical-primary hover:bg-medical-primary-dark">
          <Plus className="h-4 w-4 mr-2" />
          New Patient
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Patients */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-medical-subtitle">Recent Patients</h2>
            <Button variant="ghost" size="sm" className="text-medical-primary">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid gap-4">
            {recentPatients.map((patient) => (
              <PatientCard 
                key={patient.id} 
                patient={patient} 
                onViewDetails={handleViewPatientDetails}
              />
            ))}
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="space-y-6">
          {/* Today's Schedule */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-medical-subtitle">Today's Schedule</h3>
              <Button variant="ghost" size="sm" className="text-medical-primary">
                <Calendar className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-3">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="text-medical-body font-medium">{appointment.time}</p>
                    <p className="text-medical-caption">{appointment.patient}</p>
                  </div>
                  <span className="text-xs bg-medical-primary-light text-medical-primary px-2 py-1 rounded">
                    {appointment.type}
                  </span>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-4">
              View Full Calendar
            </Button>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="text-medical-subtitle mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Add New Patient
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Appointment
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Activity className="h-4 w-4 mr-2" />
                View Alerts
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
