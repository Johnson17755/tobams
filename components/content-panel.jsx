"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/button";
import { ExpandableSection } from "./expanable-section";
import { SectionItem } from "./section";
import { ThemeToggle } from "./toggle";
import { useTheme } from "./toggle";

export function ContentPanel({
  projects,
  onAddProject,
  onProjectClick,
  onTaskClick,
}) {
  const [projectsExpanded, setProjectsExpanded] = useState(true);
  const [tasksExpanded, setTasksExpanded] = useState(true);
  const [teamExpanded, setTeamExpanded] = useState(false);
  const [remindersExpanded, setRemindersExpanded] = useState(false);
  const [messengersExpanded, setMessengersExpanded] = useState(false);

  // ✅ use only theme from context
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="w-64 bg-card border-r border-border flex flex-col md:w-64 sm:w-56 xs:w-48"
      style={{
        backgroundColor: theme === "dark" ? "#334155" : "#f8fafc",
        borderColor: theme === "dark" ? "#475569" : "#e2e8f0",
        color: theme === "dark" ? "#f1f5f9" : "#334155",
      }}
    >
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-foreground">Projects</h1>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-foreground hover:bg-accent"
            onClick={onAddProject}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Navigation Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-2 space-y-1">
          {/* Team */}
          <ExpandableSection
            title="Team"
            isExpanded={teamExpanded}
            onToggle={() => setTeamExpanded(!teamExpanded)}
          >
            <SectionItem>Team members (5)</SectionItem>
            <SectionItem>Permissions</SectionItem>
          </ExpandableSection>

          {/* Projects Section */}
          <ExpandableSection
            title="Projects"
            isExpanded={projectsExpanded}
            onToggle={() => setProjectsExpanded(!projectsExpanded)}
            variant="bold"
          >
            <SectionItem onClick={() => onProjectClick("All projects")}>
              All projects ({projects.length})
            </SectionItem>
            {projects.map((project, index) => (
              <SectionItem key={index} onClick={() => onProjectClick(project)}>
                {project}
              </SectionItem>
            ))}
          </ExpandableSection>

          {/* Tasks Section */}
          <ExpandableSection
            title="Tasks"
            isExpanded={tasksExpanded}
            onToggle={() => setTasksExpanded(!tasksExpanded)}
            variant="bold"
          >
            <SectionItem onClick={() => onTaskClick("All tasks")}>
              All tasks (11)
            </SectionItem>
            <SectionItem onClick={() => onTaskClick("To do")}>
              To do (4)
            </SectionItem>
            <SectionItem onClick={() => onTaskClick("In progress")}>
              In progress (4)
            </SectionItem>
            <SectionItem onClick={() => onTaskClick("Done")}>
              Done (3)
            </SectionItem>
          </ExpandableSection>

          {/* Reminders */}
          <ExpandableSection
            title="Reminders"
            isExpanded={remindersExpanded}
            onToggle={() => setRemindersExpanded(!remindersExpanded)}
          >
            <SectionItem>Today (2)</SectionItem>
            <SectionItem>This week (5)</SectionItem>
          </ExpandableSection>

          {/* Messengers */}
          <ExpandableSection
            title="Messengers"
            isExpanded={messengersExpanded}
            onToggle={() => setMessengersExpanded(!messengersExpanded)}
          >
            <SectionItem>Slack (3)</SectionItem>
            <SectionItem>Teams (1)</SectionItem>
          </ExpandableSection>
        </div>
      </div>

      {/* ✅ Theme Toggle controlled by context */}
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </div>
  );
}
