import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Target, Clock, Award } from "lucide-react";

export default function Analytics() {
  const weeklyData = [
    { day: "Mon", hours: 4 },
    { day: "Tue", hours: 6 },
    { day: "Wed", hours: 3 },
    { day: "Thu", hours: 5 },
    { day: "Fri", hours: 7 },
    { day: "Sat", hours: 4 },
    { day: "Sun", hours: 2 },
  ];

  const maxHours = Math.max(...weeklyData.map(d => d.hours));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="mt-2 text-muted-foreground">
          Track your study progress and productivity
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-3">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Study Time</p>
                <p className="text-2xl font-bold">31 hrs</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-success/10 p-3">
                <Target className="h-5 w-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Goals Met</p>
                <p className="text-2xl font-bold">85%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-accent/10 p-3">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Productivity</p>
                <p className="text-2xl font-bold">+12%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary-glow/10 p-3">
                <Award className="h-5 w-5 text-primary-glow" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Streak</p>
                <p className="text-2xl font-bold">7 days</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Study Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weeklyData.map((data) => (
              <div key={data.day}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium">{data.day}</span>
                  <span className="text-muted-foreground">{data.hours} hours</span>
                </div>
                <Progress value={(data.hours / maxHours) * 100} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Subject Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>Mathematics</span>
                <span className="text-muted-foreground">35%</span>
              </div>
              <Progress value={35} className="h-2" />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>Physics</span>
                <span className="text-muted-foreground">25%</span>
              </div>
              <Progress value={25} className="h-2" />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>Chemistry</span>
                <span className="text-muted-foreground">20%</span>
              </div>
              <Progress value={20} className="h-2" />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span>History</span>
                <span className="text-muted-foreground">20%</span>
              </div>
              <Progress value={20} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 rounded-lg bg-gradient-primary p-3 text-primary-foreground">
              <Award className="h-6 w-6" />
              <div>
                <p className="font-medium">Week Warrior</p>
                <p className="text-sm opacity-90">Studied 7 days in a row</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border bg-card p-3">
              <Award className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Task Master</p>
                <p className="text-sm text-muted-foreground">Completed 50 tasks</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border bg-card p-3">
              <Award className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Early Bird</p>
                <p className="text-sm text-muted-foreground">10 morning study sessions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
