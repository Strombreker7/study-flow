import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Save, FileText } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Workspace() {
  const [notes, setNotes] = useState("");

  const saveNotes = () => {
    toast.success("Notes saved successfully!");
  };

  const recentNotes = [
    { title: "Chapter 5 Summary", date: "2 hours ago" },
    { title: "Physics Formulas", date: "Yesterday" },
    { title: "History Timeline", date: "2 days ago" },
    { title: "Chemistry Lab Notes", date: "3 days ago" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Workspace</h1>
        <p className="mt-2 text-muted-foreground">
          Take notes and organize your study materials
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Notes Editor</CardTitle>
              <Button onClick={saveNotes} className="gap-2">
                <Save className="h-4 w-4" />
                Save
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Start typing your notes here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-96 resize-none"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentNotes.map((note, index) => (
              <button
                key={index}
                className="flex w-full items-start gap-3 rounded-lg border bg-card p-3 text-left shadow-card transition-all hover:shadow-hover"
              >
                <FileText className="mt-0.5 h-5 w-5 text-primary" />
                <div className="flex-1">
                  <p className="font-medium">{note.title}</p>
                  <p className="text-sm text-muted-foreground">{note.date}</p>
                </div>
              </button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
