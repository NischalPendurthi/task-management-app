
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Help and Support</h1>
            <p
              className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get the help you need to make the most of our task management app.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold">FAQs</h2>
              <div className="mt-4 space-y-4">
                <Collapsible
                  className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:bg-gray-950 dark:border-gray-800">
                  <CollapsibleTrigger className="flex w-full items-center justify-between">
                    <h3 className="text-lg font-medium">How do I create a new task?</h3>
                    <ChevronDownIcon className="h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      To create a new task, click the New Task button in the top-right corner of the app. Fill out the
                      task details, including the title, description, due date, and any attachments or subtasks, then
                      click Create to add it to your task list.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible
                  className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                  <CollapsibleTrigger className="flex w-full items-center justify-between">
                    <h3 className="text-lg font-medium">How do I assign tasks to my team?</h3>
                    <ChevronDownIcon className="h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      To assign a task to a team member, click on the task to open the details view. In the Assignee
                      section, start typing the name of the person you want to assign the task to, and select their name
                      from the dropdown. You can also add multiple assignees to a single task.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
                <Collapsible
                  className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:bg-gray-950 dark:border-gray-800">
                  <CollapsibleTrigger className="flex w-full items-center justify-between">
                    <h3 className="text-lg font-medium">How do I track the progress of my tasks?</h3>
                    <ChevronDownIcon className="h-5 w-5 transition-all" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      You can track the progress of your tasks by updating the status of each task. To do this, click on
                      the task to open the details view, then use the Status dropdown to select the appropriate
                      status, such as To Do, In Progress, or Done. You can also view the overall progress of your
                      project on the dashboard.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Documentation</h2>
              <div className="mt-4 space-y-2">
                <Link
                  className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-300"
                  href="#">
                  <FileIcon className="h-5 w-5" />
                  User Guide
                </Link>
                <Link
                  className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-300"
                  href="#">
                  <FileIcon className="h-5 w-5" />
                  API Documentation
                </Link>
                <Link
                  className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-300"
                  href="#">
                  <FileIcon className="h-5 w-5" />
                  Tutorials
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Contact Support</h2>
              <div className="mt-4 space-y-4">
                <Card className="w-full max-w-md">
                  <CardContent className="p-4">
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="Enter your subject" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Describe your issue or question" rows={4} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="urgency">Urgency</Label>
                          <Select defaultValue="medium" id="urgency">
                            <SelectTrigger>
                              <SelectValue placeholder="Select urgency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="type">Type</Label>
                          <Select defaultValue="question" id="type">
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="question">Question</SelectItem>
                              <SelectItem value="bug">Bug Report</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Button type="submit">Submit</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Community Forum</h2>
              <div className="mt-4 space-y-4">
                <Card className="w-full max-w-md">
                  <CardContent className="p-4">
                    <div className="grid gap-4">
                      <div className="flex items-center gap-2">
                        <UsersIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        <h3 className="text-lg font-medium">Join our active community forum</h3>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Connect with other users, ask questions, and share tips and tricks in our community forum.
                      </p>
                      <Link
                        className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-300"
                        href="#">
                        <FacebookIcon className="h-5 w-5" />
                        Visit Forum
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
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


function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>)
  );
}


function FileIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
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
