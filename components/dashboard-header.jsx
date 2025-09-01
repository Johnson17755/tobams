"use client";

import { Button } from "@/components/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Search, Bell, Filter, MoreHorizontal, Calendar } from "lucide-react";

export function DashboardHeader() {
  return (
    <>
      {/* Main Header */}
      <div className="bg-card border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-foreground">
              Welcome back, Vincent 👋
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative p-3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            </div>
            {/* <Input className="pl-10 w-64" placeholder="Search..." /> */}
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <span>
              <Calendar className="w-5 h-5" />
            </span>
            <span className="text-sm text-muted-foreground">19 May 2022</span>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>VN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-card border-b border-border px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Button variant="ghost" className="text-sm font-medium">
              Board view
            </Button>
            <Button variant="ghost" className="text-sm text-muted-foreground">
              + Add view
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="ghost" size="sm">
              Sort
            </Button>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              New template
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
