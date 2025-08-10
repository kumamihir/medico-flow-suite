
import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { MedicalSidebar } from '@/components/medical/Sidebar';
import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DoctorLayoutProps {
  children: React.ReactNode;
}

export function DoctorLayout({ children }: DoctorLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <MedicalSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Top Header */}
          <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="md:hidden" />
              <div className="hidden md:block">
                <h1 className="text-medical-subtitle">Welcome back, Dr. Smith</h1>
                <p className="text-medical-caption">Have a great day helping patients!</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-status-critical rounded-full text-xs"></span>
              </Button>
              
              {/* User Profile */}
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="hidden md:inline text-sm font-medium">Dr. Smith</span>
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
