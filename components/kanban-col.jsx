"use client";

import { Button } from "@/components/button";
import { Plus } from "lucide-react";
import { TaskCard } from "./addtask";
import { AddTaskForm } from "./addTaskForm";

export function KanbanColumn({
  title,
  tasks,
  status,
  isAddingTask,
  onAddTask,
  onSubmitTask,
  onCancelAdd,
  showDropZone = false,
}) {
  return (
    <div className="space-y-4 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-semibold  text-[#1C1D2280]  whitespace-nowrap">
          {title} ({tasks.length})
        </h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onAddTask(status)}
          className="gap-1"
        >
          <Plus className="w-4 h-4 border rounded-2xl border-[#1C1D2214] bg-[#1C1D2214]" />
          <p className="font-bold text-xs"> Add new task</p>
        </Button>
      </div>

      {isAddingTask && (
        <AddTaskForm
          onAdd={(title) => onSubmitTask(title, status)}
          onCancel={onCancelAdd}
        />
      )}

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}

      {showDropZone && (
        <div className="border-2 border-dashed border-border border-[rgba(28,29,34,0.08)] rounded-lg p-8 text-center text-[#1C1D2280] text-muted-foreground">
          Drag your task here...
        </div>
      )}
    </div>
  );
}
