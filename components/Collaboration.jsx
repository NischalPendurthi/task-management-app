
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    (<div className="flex flex-col h-full">
      <header
        className="bg-gray-100 dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Collaboration</h1>
        <div className="flex items-center gap-4">
          <Button size="sm" variant="outline">
            <PlusIcon className="w-4 h-4 mr-2" />
            Add Member
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline">
                <SettingsIcon className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Team Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Manage Roles</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Integrations</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 p-6">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold">Team Members</h2>
          </div>
          <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <Avatar>
                <AvatarImage alt="John Doe" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="mt-2 text-center">
                <p className="font-medium">John Doe</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Manager</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Avatar>
                <AvatarImage alt="Jane Smith" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="mt-2 text-center">
                <p className="font-medium">Jane Smith</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Designer</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Avatar>
                <AvatarImage alt="Bob Johnson" src="/placeholder-avatar.jpg" />
                <AvatarFallback>BJ</AvatarFallback>
              </Avatar>
              <div className="mt-2 text-center">
                <p className="font-medium">Bob Johnson</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Developer</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Avatar>
                <AvatarImage alt="Sarah Lee" src="/placeholder-avatar.jpg" />
                <AvatarFallback>SL</AvatarFallback>
              </Avatar>
              <div className="mt-2 text-center">
                <p className="font-medium">Sarah Lee</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">QA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold">Task Assignments</h2>
          </div>
          <div className="p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Task</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Redesign homepage</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">Improve user experience</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage alt="Jane Smith" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Jane Smith</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Designer</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>May 15, 2023</TableCell>
                  <TableCell>
                    <Badge variant="success">In Progress</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoveHorizontalIcon className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Reassign</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Implement new feature</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">Add user profile settings</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage alt="Bob Johnson" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>BJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Bob Johnson</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Developer</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>June 1, 2023</TableCell>
                  <TableCell>
                    <Badge variant="success">Completed</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoveHorizontalIcon className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Reassign</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Write documentation</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">Create user guides and tutorials</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage alt="Sarah Lee" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>SL</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Sarah Lee</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">QA</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>May 30, 2023</TableCell>
                  <TableCell>
                    <Badge variant="warning">In Review</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoveHorizontalIcon className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Reassign</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4">Team Communication</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-md font-semibold">Project Updates</h3>
              <Button size="sm" variant="outline">
                <PlusIcon className="w-4 h-4 mr-2" />
                New Update
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage alt="John Doe" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Just pushed the latest design updates to the staging server.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    <time dateTime="2023-05-07T12:34:56">2 hours ago</time>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage alt="Jane Smith" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Finished the new feature implementation. Ready for review.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    <time dateTime="2023-05-06T09:12:34">1 day ago</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-md font-semibold">Team Chat</h3>
              <Button size="sm" variant="outline">
                <PlusIcon className="w-4 h-4 mr-2" />
                New Message
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage alt="Bob Johnson" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>BJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Bob Johnson</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Hey team, just wanted to check in on the progress of the new feature. Any blockers I can help with?
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    <time dateTime="2023-05-07T10:23:45">3 hours ago</time>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage alt="Sarah Lee" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>SL</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Sarah Lee</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Great work on the documentation, everyone! Let me know if you need any clarification or have
                    additional feedback.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    <time dateTime="2023-05-06T15:45:12">1 day ago</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
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
