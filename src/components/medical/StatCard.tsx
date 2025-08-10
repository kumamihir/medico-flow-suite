
import React from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string;
    trend: 'up' | 'down' | 'neutral';
  };
  icon: LucideIcon;
  variant?: 'default' | 'success' | 'warning' | 'critical';
}

export function StatCard({ title, value, change, icon: Icon, variant = 'default' }: StatCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'success':
        return 'border-status-success bg-green-50';
      case 'warning':
        return 'border-status-warning bg-yellow-50';
      case 'critical':
        return 'border-status-critical bg-red-50';
      default:
        return 'border-medical-primary bg-medical-primary-light';
    }
  };

  const getIconClasses = () => {
    switch (variant) {
      case 'success':
        return 'text-status-success';
      case 'warning':
        return 'text-status-warning';
      case 'critical':
        return 'text-status-critical';
      default:
        return 'text-medical-primary';
    }
  };

  const getTrendColor = () => {
    if (!change) return '';
    switch (change.trend) {
      case 'up': return 'text-status-success';
      case 'down': return 'text-status-critical';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Card className={`card-stat ${getVariantClasses()} animate-slide-up`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-medical-caption font-medium mb-1">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {change && (
            <p className={`text-xs font-medium mt-1 ${getTrendColor()}`}>
              {change.trend === 'up' ? '↗' : change.trend === 'down' ? '↘' : '→'} {change.value}
            </p>
          )}
        </div>
        <div className={`w-12 h-12 rounded-full bg-white/50 flex items-center justify-center ${getIconClasses()}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </Card>
  );
}
