"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { NavigationBar } from "./navigation";
import { ContentPanel } from "./content-panel";

export function Sidebar({ className }) {
  const [theme, setTheme] = useState("light");
  const [projects, setProjects] = useState([
    "Design system",
    "User flow",
    "Ux research",
  ]);
  const [activeNavItem, setActiveNavItem] = useState("projects");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  const addNewProject = () => {
    const projectName = prompt("Enter project name:");
    if (projectName && projectName.trim()) {
      setProjects([...projects, projectName.trim()]);
    }
  };

  const handleProjectClick = (projectName) => {
    console.log("[v0] Project clicked:", projectName);
  };

  const handleTaskClick = (taskType) => {
    console.log("[v0] Task clicked:", taskType);
  };

  const handleNavClick = (navItem) => {
    setActiveNavItem(navItem);
    console.log("[v0] Navigation clicked:", navItem);
  };

  return (
    <div className={cn("flex h-screen bg-background", className)}>
      <NavigationBar
        activeNavItem={activeNavItem}
        onNavClick={handleNavClick}
      />
      <ContentPanel
        projects={projects}
        onAddProject={addNewProject}
        onProjectClick={handleProjectClick}
        onTaskClick={handleTaskClick}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
    </div>
  );
}
