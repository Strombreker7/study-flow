import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  priority?: "low" | "medium" | "high";
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ id, title, completed, priority = "medium", onToggle, onDelete }: TodoItemProps) {
  const priorityColors = {
    low: "border-l-success",
    medium: "border-l-primary",
    high: "border-l-destructive",
  };

  return (
    <div
      className={`flex items-center gap-3 rounded-lg border border-l-4 ${priorityColors[priority]} bg-card p-4 shadow-card transition-all hover:shadow-hover`}
    >
      <Checkbox
        checked={completed}
        onCheckedChange={() => onToggle(id)}
        className="h-5 w-5"
      />
      <span className={`flex-1 ${completed ? "text-muted-foreground line-through" : "text-card-foreground"}`}>
        {title}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(id)}
        className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
