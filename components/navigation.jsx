"use client";
import {
  Ellipsis,
  Box,
  LayoutGrid,
  User,
  Calendar,
  SquareKanban,
  CloudUpload,
  Map,
  SlidersHorizontal,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function NavigationBar({ activeNavItem, onNavClick }) {
  const navItems = [
    { icon: Ellipsis, label: "Ellipsis" },
    { icon: Box, label: "Tasks" },
    { icon: LayoutGrid, label: "Dashboard" },
    { icon: User, label: "Profile" },
    { icon: Calendar, label: "Calendar" },
    { icon: SquareKanban, label: "Analytics" },
    { icon: CloudUpload, label: "Cloud" },
    { icon: Map, label: "Map" },
    { icon: SlidersHorizontal, label: "Settings" },
  ];

  return (
    <div className="w-16 bg-[#1C1D22] dark:bg-slate-950 flex flex-col items-center py-4 space-y-2">
      {/* Logo/Brand */}
      {/* <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mb-4">
        <div className="w-4 h-4 bg-slate-900 rounded-sm"></div>
      </div> */}

      {/* Navigation Icons */}
      <div className="flex flex-col space-y-2 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => onNavClick(item.label)}
              className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                activeNavItem === item.label
                  ? "bg-slate-700 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              )}
              title={item.label}
            >
              <Icon className="h-5 w-5" />
            </button>
          );
        })}
      </div>

      {/* Logout at bottom */}
      <button
        onClick={() => onNavClick("LogOut")}
        className={cn(
          "mt-auto w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
          activeNavItem === "LogOut"
            ? "bg-slate-700 text-white"
            : "text-slate-400 hover:bg-slate-800 hover:text-white"
        )}
        title="LogOut"
      >
        <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
      </button>
    </div>
  );
}
