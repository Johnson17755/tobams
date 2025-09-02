"use client";

import { Button } from "@/components/button";
import { Card, CardContent, CardHeader } from "@/components/card";
import { Avatar, AvatarFallback } from "@/components/avatar";
import {
  MoreHorizontal,
  MessageSquareText,
  Paperclip,
  List,
} from "lucide-react";

export function TaskCard({ task }) {
  const getProgressColor = (progress, maxProgress) => {
    const percentage = (progress / maxProgress) * 100;
    if (percentage >= 80) return "bg-green-500";
    if (percentage >= 50) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <Card className="hover:shadow-md transition-shadow shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <h3 className="font-bold text-xs text-card-foreground">
            {task.title}
          </h3>
          <Button
            variant="ghost"
            size="sm"
            className="border border-[rgba(28,29,34,0.08)] p-2.5 rounded-2xl"
          >
            <MoreHorizontal className="w-3 h-3" />
          </Button>
        </div>
        <p className="text-xs text-[#1C1D2280] text-muted-foreground">
          {task.description}
        </p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1 text-card-foreground text-[#1C1D2280] font-bold">
              <List className="w-3 h-3" />
              Progress
            </span>

            <span className="text-card-foreground">
              {task.progress}/{task.maxProgress}
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                task.status === "done"
                  ? "bg-green-500"
                  : getProgressColor(task.progress, task.maxProgress)
              }`}
              style={{
                width:
                  task.status === "done"
                    ? "100%"
                    : `${(task.progress / task.maxProgress) * 100}%`,
              }}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{task.date}</span>
            {/* border rounded bg-[#888DA71A] p-2 */}
            <div className="flex items-center space-x-2">
              {task.comments > 0 && (
                <div className="flex items-center space-x-1">
                  <MessageSquareText className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {task.comments}
                  </span>
                </div>
              )}
              {task.views > 0 && (
                <div className="flex items-center space-x-1">
                  <Paperclip className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {task.views}
                  </span>
                </div>
              )}
              <div className="flex -space-x-1">
                {task.assignees.map((assignee, index) => (
                  <Avatar key={index} className="w-6 h-6 border-2 border-card">
                    <AvatarFallback className="text-xs">
                      {assignee}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
