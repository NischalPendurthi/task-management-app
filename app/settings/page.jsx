
import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

export default function Component() {
  return (
    (<div className="flex h-full w-full">
      <div
        className="bg-gray-100 dark:bg-gray-800 p-6 border-r border-gray-200 dark:border-gray-700 w-64 shrink-0">
        <nav className="space-y-4">
          <Link
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#">
            <BellIcon className="w-5 h-5" />
            Notifications
          </Link>
          <Link
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#">
            <LayoutTemplateIcon className="w-5 h-5" />
            Views
          </Link>
          <Link
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#">
            <PlugIcon className="w-5 h-5" />
            Integrations
          </Link>
          <Link
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#">
            <UserIcon className="w-5 h-5" />
            Profile
          </Link>
        </nav>
      </div>
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>
          <div className="space-y-8">
            <section>
              <h2 className="text-lg font-semibold mb-4">Notifications</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">New Tasks</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Get notified when new tasks are assigned to you.
                    </p>
                  </div>
                  <Switch defaultChecked id="new-tasks" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">Due Dates</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when tasks are due.</p>
                  </div>
                  <Switch id="due-dates" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">Comments</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Get notified when someone comments on your tasks.
                    </p>
                  </div>
                  <Switch defaultChecked id="comments" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">Notification Frequency</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Choose how often you want to receive notifications.
                    </p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="flex items-center gap-2" variant="outline">
                        Instantly
                        <ChevronDownIcon className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuRadioGroup value="instantly">
                        <DropdownMenuRadioItem value="instantly">Instantly</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="hourly">Hourly</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="daily">Daily</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="weekly">Weekly</DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-lg font-semibold mb-4">Views</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">Default View</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Choose the default view for your tasks.</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="flex items-center gap-2" variant="outline">
                        Kanban
                        <ChevronDownIcon className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuRadioGroup value="kanban">
                        <DropdownMenuRadioItem value="kanban">Kanban</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="calendar">Calendar</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="list">List</DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">Column Layout</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Customize the columns displayed in your Kanban view.
                    </p>
                  </div>
                  <Button variant="outline">Edit Columns</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">Filters</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Manage the filters available in your task views.
                    </p>
                  </div>
                  <Button variant="outline">Manage Filters</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">Sorting</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Configure the default sorting options for your tasks.
                    </p>
                  </div>
                  <Button variant="outline">Edit Sorting</Button>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-lg font-semibold mb-4">Integrations</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">Calendar</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Connect your task management app to your calendar.
                    </p>
                  </div>
                  <Button variant="outline">Connect Calendar</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">Messaging</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Integrate your task management app with your messaging platform.
                    </p>
                  </div>
                  <Button variant="outline">Connect Messaging</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">Cloud Storage</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Connect your task management app to your cloud storage provider.
                    </p>
                  </div>
                  <Button variant="outline">Connect Cloud Storage</Button>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-lg font-semibold mb-4">Profile</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">Personal Information</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Update your name, email, and other personal details.
                    </p>
                  </div>
                  <Button variant="outline">Edit Profile</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">Password</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Change your password for added security.</p>
                  </div>
                  <Button variant="outline">Change Password</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">Data Management</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Download or import your task data.</p>
                  </div>
                  <Button variant="outline">Manage Data</Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>)
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


function LayoutTemplateIcon(props) {
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
      <rect width="18" height="7" x="3" y="3" rx="1" />
      <rect width="9" height="7" x="3" y="14" rx="1" />
      <rect width="5" height="7" x="16" y="14" rx="1" />
    </svg>)
  );
}


function PlugIcon(props) {
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
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>)
  );
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}
