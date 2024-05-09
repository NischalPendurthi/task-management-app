
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export  default function TaskDetail() {
  return (
    (<div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm">
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Redesign the company website</h1>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline">
              Edit Task
            </Button>
            <Button size="sm">Mark as Complete</Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-medium mb-2">Task Description</h2>
            <p className="text-gray-500 dark:text-gray-400">
              The company website needs a complete overhaul to modernize its design, improve user experience, and
              showcase our latest products and services.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-2">Due Date</h2>
            <p className="text-gray-500 dark:text-gray-400">June 30, 2023</p>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-2">Priority</h2>
            <div className="flex items-center gap-2">
              <FlagIcon className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-500 dark:text-gray-400">High</span>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-2">Assigned To</h2>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/avatars/01.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/avatars/02.png" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/avatars/03.png" />
                <AvatarFallback>KL</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-2">Attached Files</h2>
            <div className="flex items-center gap-2">
              <FileIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Design_Mockups.pdf</span>
            </div>
            <div className="flex items-center gap-2">
              <FileIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-500 dark:text-gray-400">Content_Guidelines.docx</span>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-2">Task Notes</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Remember to incorporate the latest branding guidelines and ensure the website is mobile-friendly.
            </p>
          </div>
        </div>
      </div>
    </div>)
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
