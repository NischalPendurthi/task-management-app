
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"

export  default function Component() {
  return (
    (<div className="flex flex-col h-full">
      <header
        className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#">
            <ChevronLeftIcon className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-semibold">Design Project</h1>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <FilterIcon className="w-5 h-5" />
                <span className="sr-only">Filter tasks</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Checkbox defaultChecked id="filter-todo" />
                <Label className="ml-2" htmlFor="filter-todo">
                  To Do
                </Label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox defaultChecked id="filter-inprogress" />
                <Label className="ml-2" htmlFor="filter-inprogress">
                  In Progress
                </Label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Checkbox defaultChecked id="filter-completed" />
                <Label className="ml-2" htmlFor="filter-completed">
                  Completed
                </Label>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <ListOrderedIcon className="w-5 h-5" />
                <span className="sr-only">Sort tasks</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <RadioGroup value="dueDate">
                  <DropdownMenuRadioItem value="dueDate">Due Date</DropdownMenuRadioItem>
                </RadioGroup>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <RadioGroup value="priority">
                  <DropdownMenuRadioItem value="priority">Priority</DropdownMenuRadioItem>
                </RadioGroup>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        <div
          className="bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 w-64 p-6 space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Project Actions</h3>
            <Link
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#">
              <PlusIcon className="w-4 h-4" />
              Add Task
            </Link>
            <Link
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#">
              <DeleteIcon className="w-4 h-4" />
              Edit Project
            </Link>
            <Link
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#">
              <ArchiveIcon className="w-4 h-4" />
              Archive Completed
            </Link>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Project Details</h3>
            <div
              className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              <CalendarIcon className="w-4 h-4" />
              <span>Due: May 31, 2023</span>
            </div>
            <div
              className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              <UsersIcon className="w-4 h-4" />
              <span>3 Collaborators</span>
            </div>
          </div>
        </div>
        <div className="flex-1 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Tasks</h2>
            <Button size="sm">Add Task</Button>
          </div>
          <div className="space-y-4">
            <div
              className="flex items-center gap-4 bg-white dark:bg-gray-950 p-4 rounded-lg shadow-sm">
              <div className="flex-1">
                <h3 className="text-lg font-medium">Finalize design mockups</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Due: May 15, 2023</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="success">Completed</Badge>
                <Button size="icon" variant="ghost">
                  <MoveHorizontalIcon className="w-5 h-5" />
                  <span className="sr-only">More options</span>
                </Button>
              </div>
            </div>
            <div
              className="flex items-center gap-4 bg-white dark:bg-gray-950 p-4 rounded-lg shadow-sm">
              <div className="flex-1">
                <h3 className="text-lg font-medium">Implement new feature</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Due: May 22, 2023</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="warning">In Progress</Badge>
                <Button size="icon" variant="ghost">
                  <MoveHorizontalIcon className="w-5 h-5" />
                  <span className="sr-only">More options</span>
                </Button>
              </div>
            </div>
            <div
              className="flex items-center gap-4 bg-white dark:bg-gray-950 p-4 rounded-lg shadow-sm">
              <div className="flex-1">
                <h3 className="text-lg font-medium">Write project documentation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Due: May 31, 2023</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="primary">To Do</Badge>
                <Button size="icon" variant="ghost">
                  <MoveHorizontalIcon className="w-5 h-5" />
                  <span className="sr-only">More options</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}

function ArchiveIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
      <path d="M10 12h4" />
    </svg>)
  );
}


function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function ChevronLeftIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>)
  );
}


function DeleteIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>)
  );
}


function FilterIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>)
  );
}


function ListOrderedIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>)
  );
}


function MoveHorizontalIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>)
  );
}


function PlusIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>)
  );
}


function UsersIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>)
  );
}
