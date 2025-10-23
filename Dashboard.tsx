import { CheckSquare, BookOpen, TrendingUp, Target } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import studyHero from "@/assets/study-hero.jpg";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={studyHero}
          alt="Study workspace"
          className="h-64 w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
        <div className="absolute inset-0 flex flex-col justify-center px-8">
          <h1 className="text-4xl font-bold text-white">Welcome back, Student!</h1>
          <p className="mt-2 text-lg text-white/90">Let's make today productive</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Tasks Completed"
          value="12"
          icon={CheckSquare}
          trend="+3 from yesterday"
          gradient
        />
        <StatCard
          title="Upcoming Exams"
          value="3"
          icon={BookOpen}
          trend="Next exam in 5 days"
        />
        <StatCard
          title="Study Streak"
          value="7 days"
          icon={TrendingUp}
          trend="Keep it up!"
        />
        <StatCard
          title="Goals This Week"
          value="5/8"
          icon={Target}
          trend="3 more to go"
        />
      </div>

      {/* Quick Overview */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Today's Focus</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium">Mathematics Homework</span>
                <span className="text-muted-foreground">75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium">Physics Lab Report</span>
                <span className="text-muted-foreground">40%</span>
              </div>
              <Progress value={40} className="h-2" />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium">History Essay</span>
                <span className="text-muted-foreground">20%</span>
              </div>
              <Progress value={20} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 rounded-lg border border-l-4 border-l-destructive bg-card p-3">
              <div className="flex-1">
                <p className="font-medium">Math Assignment</p>
                <p className="text-sm text-muted-foreground">Due in 2 days</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-l-4 border-l-primary bg-card p-3">
              <div className="flex-1">
                <p className="font-medium">Chemistry Quiz</p>
                <p className="text-sm text-muted-foreground">Due in 4 days</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-l-4 border-l-success bg-card p-3">
              <div className="flex-1">
                <p className="font-medium">English Presentation</p>
                <p className="text-sm text-muted-foreground">Due in 7 days</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
