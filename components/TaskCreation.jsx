
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export  default function Component() {
  return (
    (<Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Create New Task</CardTitle>
        <CardDescription>Fill out the form to add a new task to your project.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              maxLength={50}
              placeholder="Enter a title for your task"
              required />
            <p className="text-xs text-gray-500 dark:text-gray-400">Maximum 50 characters.</p>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              maxLength={500}
              placeholder="Provide a description for your task" />
            <p className="text-xs text-gray-500 dark:text-gray-400">Maximum 500 characters.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="dueDate">Due Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Input
                    id="dueDate"
                    placeholder="Select a due date"
                    readOnly
                    required
                    type="text" />
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-0">
                  <Calendar initialFocus mode="single" />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="priority">Priority</Label>
              <Select id="priority" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="tags">Tags</Label>
            <div>
              <div>
                <div>Feature</div>
                <div>Bug</div>
                <div>Enhancement</div>
                <div>Task</div>
              </div>
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="assignedTo">Assigned To</Label>
            <Select id="assignedTo">
              <SelectTrigger>
                <SelectValue placeholder="Select team members" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="john">John Doe</SelectItem>
                <SelectItem value="jane">Jane Smith</SelectItem>
                <SelectItem value="bob">Bob Johnson</SelectItem>
                <SelectItem value="alice">Alice Williams</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit">Create Task</Button>
      </CardFooter>
    </Card>)
  );
}
