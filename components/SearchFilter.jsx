
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export default function Component() {
  return (
    (<div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <Input className="w-full" placeholder="Search tasks..." type="search" />
          </div>
          <Button>Search</Button>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="justify-between w-full" variant="outline">
                <span>Due Date</span>
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Filter by due date</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem>Today</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>This Week</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>This Month</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Custom Range</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="justify-between w-full" variant="outline">
                <span>Priority</span>
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem>Low</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Medium</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>High</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="justify-between w-full" variant="outline">
                <span>Assigned To</span>
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Filter by assignee</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem>John Doe</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Jane Smith</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Bob Johnson</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Sarah Lee</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="mt-8 grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Finish weekly report</CardTitle>
            <CardDescription>Complete the weekly report for the marketing team by Friday.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-gray-500" />
                <span className="text-gray-500">Due: April 28, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <FlagIcon className="h-5 w-5 text-yellow-500" />
                <span className="text-yellow-500">Medium Priority</span>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage alt="John Doe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span>John Doe</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Implement new feature</CardTitle>
            <CardDescription>
              Develop the new feature for the customer dashboard by the end of the month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-gray-500" />
                <span className="text-gray-500">Due: May 31, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <FlagIcon className="h-5 w-5 text-red-500" />
                <span className="text-red-500">High Priority</span>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage alt="Jane Smith" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <span>Jane Smith</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Update team handbook</CardTitle>
            <CardDescription>
              Review and update the team handbook with the latest policies and procedures.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-gray-500" />
                <span className="text-gray-500">Due: June 15, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <FlagIcon className="h-5 w-5 text-green-500" />
                <span className="text-green-500">Low Priority</span>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage alt="Bob Johnson" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>BJ</AvatarFallback>
                </Avatar>
                <span>Bob Johnson</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>)
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


function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>)
  );
}


function FlagIcon(props) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>)
  );
}
