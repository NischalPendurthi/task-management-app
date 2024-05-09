
import Link from "next/link"
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export  default function Component() {
  return (
    (<div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <ActivityIcon className="h-6 w-6" />
              <span className="">Task Manager</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#">
                <CircuitBoardIcon className="h-4 w-4" />
                Board
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#">
                <ListIcon className="h-4 w-4" />
                List
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#">
                <CalendarIcon className="h-4 w-4" />
                Calendar
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#">
                <UsersIcon className="h-4 w-4" />
                Team
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#">
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>Unlock all features and get unlimited access to our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="sm">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header
          className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <ActivityIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search tasks..."
                  type="search" />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost">
                <Image
                    alt="Avatar"
                    className="rounded-full"
                    src="/placeholder.svg"
                    width={32}
                    height={32}
                    layout="fixed"
                    objectFit="cover"
                    />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Tasks</h1>
            <Button className="ml-auto" size="sm">
              Add Task
            </Button>
          </div>
          <div className="border shadow-sm rounded-lg">
            <Tabs className="w-full" defaultValue="board">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="board">Board</TabsTrigger>
                <TabsTrigger value="list">List</TabsTrigger>
              </TabsList>
              <TabsContent value="board">
                <div className="grid grid-cols-[repeat(4,minmax(200px,1fr))] gap-4 p-4">
                  <div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
                    <h3 className="font-semibold mb-2">To Do</h3>
                    <div className="grid gap-4">
                      <Card className="bg-white dark:bg-gray-950 p-4 rounded-lg shadow-sm">
                        <CardHeader>
                          <CardTitle>Design new website</CardTitle>
                          <CardDescription>
                            Create a modern and responsive design for the company website.
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span className="text-sm text-gray-500 dark:text-gray-400">May 15, 2024</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FlagIcon className="h-4 w-4 text-red-500" />
                            <span className="text-sm text-red-500">High</span>
                          </div>
                        </CardFooter>
                      </Card>
                      <Card className="bg-white dark:bg-gray-950 p-4 rounded-lg shadow-sm">
                        <CardHeader>
                          <CardTitle>Write blog post</CardTitle>
                          <CardDescription>Prepare a new blog post about the latest product updates.</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span className="text-sm text-gray-500 dark:text-gray-400">May 20, 2024</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FlagIcon className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm text-yellow-500">Medium</span>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
                    <h3 className="font-semibold mb-2">In Progress</h3>
                    <div className="grid gap-4">
                      <Card className="bg-white dark:bg-gray-950 p-4 rounded-lg shadow-sm">
                        <CardHeader>
                          <CardTitle>Develop new feature</CardTitle>
                          <CardDescription>Implement the new file upload functionality.</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span className="text-sm text-gray-500 dark:text-gray-400">May 18, 2024</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FlagIcon className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm text-yellow-500">Medium</span>
                          </div>
                        </CardFooter>
                      </Card>
                      <Card className="bg-white dark:bg-gray-950 p-4 rounded-lg shadow-sm">
                        <CardHeader>
                          <CardTitle>Refactor codebase</CardTitle>
                          <CardDescription>
                            Review and optimize the existing codebase for better performance.
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span className="text-sm text-gray-500 dark:text-gray-400">May 22, 2024</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FlagIcon className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-green-500">Low</span>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
                    <h3 className="font-semibold mb-2">Review</h3>
                    <div className="grid gap-4">
                      <Card className="bg-white dark:bg-gray-950 p-4 rounded-lg shadow-sm">
                        <CardHeader>
                          <CardTitle>Review marketing campaign</CardTitle>
                          <CardDescription>Analyze the performance of the latest marketing campaign.</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span className="text-sm text-gray-500 dark:text-gray-400">May 25, 2024</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FlagIcon className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm text-yellow-500">Medium</span>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
                    <h3 className="font-semibold mb-2">Done</h3>
                    <div className="grid gap-4">
                      <Card className="bg-white dark:bg-gray-950 p-4 rounded-lg shadow-sm">
                        <CardHeader>
                          <CardTitle>Implement new dashboard</CardTitle>
                          <CardDescription>Create a new dashboard design for the admin panel.</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span className="text-sm text-gray-500 dark:text-gray-400">May 12, 2024</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FlagIcon className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-green-500">Low</span>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="list">
                <div className="border-t">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Task</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Priority</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <ActivityIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span>Design new website</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span>May 15, 2024</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <FlagIcon className="h-4 w-4 text-red-500" />
                            <span>High</span>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <ActivityIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span>Write blog post</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>)
  );
}

function ActivityIcon(props) {
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
      <path
        d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>)
  );
}


function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
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


function CircuitBoardIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M11 9h4a2 2 0 0 0 2-2V3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
      <circle cx="15" cy="15" r="2" />
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


function ListIcon(props) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>)
  );
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function SettingsIcon(props) {
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
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
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
