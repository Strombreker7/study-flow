import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  gradient?: boolean;
}

export function StatCard({ title, value, icon: Icon, trend, gradient }: StatCardProps) {
  return (
    <Card className={`overflow-hidden transition-all hover:shadow-hover ${gradient ? 'bg-gradient-primary text-primary-foreground' : ''}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className={`text-sm font-medium ${gradient ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
              {title}
            </p>
            <h3 className="mt-2 text-3xl font-bold">{value}</h3>
            {trend && (
              <p className={`mt-1 text-xs ${gradient ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                {trend}
              </p>
            )}
          </div>
          <div className={`rounded-full p-3 ${gradient ? 'bg-white/10' : 'bg-primary/10'}`}>
            <Icon className={`h-6 w-6 ${gradient ? 'text-primary-foreground' : 'text-primary'}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
