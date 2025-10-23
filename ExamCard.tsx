import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock } from "lucide-react";
import { differenceInDays, format } from "date-fns";

interface ExamCardProps {
  subject: string;
  date: Date;
  time: string;
  location: string;
  type: string;
}

export function ExamCard({ subject, date, time, location, type }: ExamCardProps) {
  const daysUntil = differenceInDays(date, new Date());
  const isUrgent = daysUntil <= 7;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-hover">
      <CardHeader className={`${isUrgent ? 'bg-destructive/10' : 'bg-primary/5'}`}>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold">{subject}</CardTitle>
          <Badge variant={isUrgent ? "destructive" : "default"}>
            {daysUntil === 0 ? "Today" : daysUntil === 1 ? "Tomorrow" : `${daysUntil} days`}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>{format(date, "MMMM d, yyyy")}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
          <div className="mt-3 flex gap-2">
            <Badge variant="outline">{type}</Badge>
            <Badge variant="secondary">{location}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
