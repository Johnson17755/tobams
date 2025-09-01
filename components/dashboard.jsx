"use client";

import { Sidebar } from "@/components/sidebar";
import { KanbanBoard } from "./kanbanBoard";

export default function Dashboard() {
  return (
    <>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />

        <main className="flex-1 overflow-y-auto">
          <KanbanBoard />
        </main>
      </div>
    </>
  );
}
