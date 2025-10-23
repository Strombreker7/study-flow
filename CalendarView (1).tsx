import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function CalendarView() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const events = [
    { title: "Math Study Session", time: "10:00 AM", type: "study" },
    { title: "Physics Lab", time: "2:00 PM", type: "class" },
    { title: "Chemistry Assignment Due", time: "5:00 PM", type: "deadline" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Calendar</h1>
        <p className="mt-2 text-muted-foreground">
          Plan your study schedule and track important dates
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Monthly View</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Today's Events</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {events.map((event, index) => (
              <div key={index} className="rounded-lg border bg-card p-3 shadow-card">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-muted-foreground">{event.time}</p>
                  </div>
                  <Badge variant={event.type === "deadline" ? "destructive" : "default"}>
                    {event.type}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
