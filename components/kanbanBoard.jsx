"use client";

import { useState } from "react";
import { DashboardHeader } from "./dashboard-header";
import { KanbanColumn } from "./kanban-col";
import { TaskProgress3D } from "./taskprogress";
import { useTheme } from "./toggle";
const initialTasks = [
  {
    id: "1",
    title: "Design new ui presentation",
    description: "Dribbble marketing",
    progress: 7,
    maxProgress: 10,
    date: "24 Aug 2022",
    assignees: ["VN"],
    comments: 7,
    views: 2,
    status: "todo",
  },
  {
    id: "2",
    title: "Add more ui/ux mockups",
    description: "Pinterest promotion",
    progress: 4,
    maxProgress: 10,
    date: "25 Aug 2022",
    assignees: ["JD", "SM"],
    comments: 0,
    views: 0,
    status: "todo",
  },
  {
    id: "3",
    title: "Design few mobile screens",
    description: "Dropbox mobile app",
    progress: 3,
    maxProgress: 10,
    date: "26 Aug 2022",
    assignees: ["AL"],
    comments: 6,
    views: 4,
    status: "todo",
  },
  {
    id: "4",
    title: "Create a tweet and promote",
    description: "Twitter marketing",
    progress: 2,
    maxProgress: 14,
    date: "27 Aug 2022",
    assignees: ["MK", "JD"],
    comments: 0,
    views: 0,
    status: "todo",
  },
  {
    id: "5",
    title: "Design system update",
    description: "Oreo website project",
    progress: 3,
    maxProgress: 10,
    date: "12 Nov 2022",
    assignees: ["VN", "SM"],
    comments: 0,
    views: 0,
    status: "inprogress",
  },
  {
    id: "6",
    title: "Create brand guideline",
    description: "Oreo branding project",
    progress: 7,
    maxProgress: 10,
    date: "13 Nov 2022",
    assignees: ["JD"],
    comments: 2,
    views: 13,
    status: "inprogress",
  },
  {
    id: "7",
    title: "Create wireframe for ios app",
    description: "Oreo ios app project",
    progress: 4,
    maxProgress: 10,
    date: "14 Nov 2022",
    assignees: ["AL", "MK"],
    comments: 0,
    views: 0,
    status: "inprogress",
  },
  {
    id: "8",
    title: "Create ui kit for layout",
    description: "Crypto mobile app",
    progress: 3,
    maxProgress: 10,
    date: "15 Nov 2022",
    assignees: ["VN"],
    comments: 23,
    views: 12,
    status: "inprogress",
  },
  {
    id: "9",
    title: "Add product to the market",
    description: "UI marketplace",
    progress: 10,
    maxProgress: 10,
    date: "6 Jan 2022",
    assignees: ["SM"],
    comments: 1,
    views: 5,
    status: "done",
  },
  {
    id: "10",
    title: "Launch product promotion",
    description: "Kickstarter campaign",
    progress: 10,
    maxProgress: 10,
    date: "7 Jan 2022",
    assignees: ["JD"],
    comments: 17,
    views: 3,
    status: "done",
  },
  {
    id: "11",
    title: "Make twitter banner",
    description: "Twitter marketing",
    progress: 10,
    maxProgress: 10,
    date: "8 Jan 2022",
    assignees: ["AL", "MK"],
    comments: 0,
    views: 0,
    status: "done",
  },
];

export function KanbanBoard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeColumn, setActiveColumn] = useState(null);
  const { theme } = useTheme();

  const getTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  const addNewTask = (title, status) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      description: "New task",
      progress: 0,
      maxProgress: 10,
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      assignees: ["VN"],
      comments: 0,
      views: 0,
      status,
    };

    setTasks([...tasks, newTask]);
    setActiveColumn(null);
  };

  const completedTasks = tasks.filter((task) => task.status === "done").length;
  const totalTasks = tasks.length;

  return (
    <div
      className="flex flex-col  min-h-screen"
      style={{
        backgroundColor: theme === "dark" ? "#222327" : "#f8fafc",
        borderColor: theme === "dark" ? "#475569" : "#e2e8f0",
        color: theme === "dark" ? "#f1f5f9" : "#334155",
      }}
    >
      <DashboardHeader />

      <div className="flex flex-1">
        {/* 3D Progress Visualization */}
        <div className="w-60 bg-card border-r border-border p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            Task Progress
          </h3>
          <div className="mb-4">
            <TaskProgress3D
              completedTasks={completedTasks}
              totalTasks={totalTasks}
            />
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            <p>
              {completedTasks} of {totalTasks} tasks completed
            </p>
            <p className="text-xs mt-1">Interactive 3D visualization</p>
          </div>
        </div>

        {/* Kanban Columns */}
        <div className="flex-1 p-6 ">
          <div className="grid grid-cols-3 gap-3 h-full">
            <div className="flex flex-col border-2 p-1 rounded-2xl border-dashed border-border border-[rgba(28,29,34,0.08)]">
              <KanbanColumn
                title={<span className="text-sm font-medium">To do</span>}
                tasks={getTasksByStatus("todo")}
                status="todo"
                isAddingTask={activeColumn === "todo"}
                onAddTask={setActiveColumn}
                onSubmitTask={addNewTask}
                onCancelAdd={() => setActiveColumn(null)}
              />
            </div>
            <div className="flex flex-col border-2 p-1 rounded-2xl border-dashed border-border border-[rgba(28,29,34,0.08)]">
              <KanbanColumn
                title={<span className="text-sm font-medium">In progress</span>}
                tasks={getTasksByStatus("inprogress")}
                status="inprogress"
                isAddingTask={activeColumn === "inprogress"}
                onAddTask={setActiveColumn}
                onSubmitTask={addNewTask}
                onCancelAdd={() => setActiveColumn(null)}
              />
            </div>
            <div className="flex flex-col border-2 p-1 rounded-2xl border-dashed border-border border-[rgba(28,29,34,0.08)]">
              <KanbanColumn
                title={<span className="text-sm font-medium">Done</span>}
                tasks={getTasksByStatus("done")}
                status="done"
                isAddingTask={activeColumn === "done"}
                onAddTask={setActiveColumn}
                onSubmitTask={addNewTask}
                onCancelAdd={() => setActiveColumn(null)}
                showDropZone={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
