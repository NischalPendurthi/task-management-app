"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ResponsiveBar } from "@nivo/bar";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { useState, useEffect } from "react";

export default function Component() {
  // Assuming you have fetched data from Prisma and stored in state
const [overdueTasks, setOverdueTasks] = useState([]);
const [upcomingTasks, setUpcomingTasks] = useState([]);

// Fetch data from Prisma here...
useEffect(() => {
  fetchData();
}, []);

async function fetchData() {
  const response = await fetch('http://localhost:3000/api/tasks')
  const tasks = await response.json()
  setOverdueTasks(tasks);
console.log(tasks)

}
console.log(overdueTasks)


  return (
    <div className="flex flex-col h-full">
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Task Overview</CardTitle>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost">
                  <LayoutGridIcon className="w-5 h-5" />
                  <span className="sr-only">Grid view</span>
                </Button>
                <Button size="icon" variant="ghost">
                  <ListIcon className="w-5 h-5" />
                  <span className="sr-only">List view</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Open</h3>
                    <span className="text-2xl font-bold">24</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Tasks that are not started yet.
                  </p>
                </div>
                <div className="col-span-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">In Progress</h3>
                    <span className="text-2xl font-bold">12</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Tasks that are currently being worked on.
                  </p>
                </div>
                <div className="col-span-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Completed</h3>
                    <span className="text-2xl font-bold">18</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Tasks that have been finished.
                  </p>
                </div>
                <div className="col-span-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Overdue</h3>
                    <span className="text-2xl font-bold">6</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Tasks that have missed their due date.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Task</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {overdueTasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell className="font-medium">{task.name}</TableCell>
                      <TableCell>{task.dueDate}</TableCell>
                      <TableCell>{task.priority}</TableCell>
                      <TableCell>{task.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <GroupedbarChart className="aspect-[4/3]" />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Notifications</CardTitle>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost">
                  <FilterIcon className="w-5 h-5" />
                  <span className="sr-only">Filter notifications</span>
                </Button>
                <Button size="icon" variant="ghost">
                  <Link href="/settings">
                    <SettingsIcon className="w-5 h-5" />
                  </Link>
                  <span className="sr-only">Notification settings</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white">
                    <ActivityIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">New task assigned</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      You have been assigned a new task: Finalize marketing
                      strategy
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      2 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 rounded-full w-10 h-10 flex items-center justify-center text-white">
                    <CheckIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Task completed</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      The task Onboard new team member has been completed.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      1 day ago
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center text-white">
                    <BadgeAlertIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Deadline approaching</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      The task Prepare quarterly report is due in 3 days.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      2 days ago
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="primary">
            <PlusIcon className="w-5 h-5 mr-2" />
            New Task
          </Button>
          <Button variant="ghost">
            <FilterIcon className="w-5 h-5 mr-2" />
            Filter
          </Button>
        </div>
        <p className="text-sm text-gray-400">
          © 2024 Task Manager. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

function BadgeAlertIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function GroupedbarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", desktop: 111, mobile: 99 },
          { name: "Feb", desktop: 157, mobile: 87 },
          { name: "Mar", desktop: 129, mobile: 89 },
          { name: "Apr", desktop: 187, mobile: 151 },
          { name: "May", desktop: 119, mobile: 127 },
          { name: "Jun", desktop: 20, mobile: 121 },
        ]}
        keys={["desktop", "mobile"]}
        indexBy="name"
        groupMode="grouped"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb", "#e11d48"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A grouped bar chart"
      />
    </div>
  );
}

function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

function ListIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function SignalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  );
}
