"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { Card, CardContent } from "@/components/card";
import { Input } from "@/components/input";

export function AddTaskForm({ onAdd, onCancel }) {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <Input
          placeholder="Enter task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
          className="mb-2"
        />
        <div className="flex space-x-2">
          <Button size="sm" onClick={handleSubmit}>
            Add
          </Button>
          <Button size="sm" variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
