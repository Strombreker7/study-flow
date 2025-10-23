import { ExamCard } from "@/components/ExamCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Exams() {
  const exams = [
    {
      subject: "Advanced Mathematics",
      date: new Date(2025, 10, 28),
      time: "9:00 AM - 11:00 AM",
      location: "Room 301",
      type: "Midterm",
    },
    {
      subject: "Physics",
      date: new Date(2025, 10, 30),
      time: "2:00 PM - 4:00 PM",
      location: "Lab Building A",
      type: "Final",
    },
    {
      subject: "Chemistry",
      date: new Date(2025, 11, 2),
      time: "10:00 AM - 12:00 PM",
      location: "Science Hall",
      type: "Midterm",
    },
    {
      subject: "History",
      date: new Date(2025, 11, 5),
      time: "1:00 PM - 3:00 PM",
      location: "Room 205",
      type: "Quiz",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Exam Schedule</h1>
          <p className="mt-2 text-muted-foreground">
            {exams.length} upcoming exams
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Exam
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {exams.map((exam, index) => (
          <ExamCard key={index} {...exam} />
        ))}
      </div>
    </div>
  );
}
