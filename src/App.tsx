
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DoctorLayout } from "@/components/layout/DoctorLayout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DoctorLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<div className="p-6"><h1 className="text-medical-title">Patients Database</h1><p className="text-muted-foreground">Patient management system coming soon...</p></div>} />
            <Route path="/appointments" element={<div className="p-6"><h1 className="text-medical-title">Appointments</h1><p className="text-muted-foreground">Calendar and scheduling system coming soon...</p></div>} />
            <Route path="/communications" element={<div className="p-6"><h1 className="text-medical-title">Communications</h1><p className="text-muted-foreground">Chat and video calling system coming soon...</p></div>} />
            <Route path="/prescriptions" element={<div className="p-6"><h1 className="text-medical-title">Prescriptions</h1><p className="text-muted-foreground">Digital prescription generator coming soon...</p></div>} />
            <Route path="/analytics" element={<div className="p-6"><h1 className="text-medical-title">Analytics</h1><p className="text-muted-foreground">Health analytics and reports coming soon...</p></div>} />
            <Route path="/monitoring" element={<div className="p-6"><h1 className="text-medical-title">Health Monitoring</h1><p className="text-muted-foreground">Real-time health monitoring dashboard coming soon...</p></div>} />
            <Route path="/settings" element={<div className="p-6"><h1 className="text-medical-title">Settings</h1><p className="text-muted-foreground">Account and privacy settings coming soon...</p></div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DoctorLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
