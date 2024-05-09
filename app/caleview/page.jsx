
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"

export  default function Component() {
  return (<>
    <div className="flex flex-col h-screen">
      <header
        className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-medium">April 2023</h1>
          <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <CalendarIcon className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <PlusIcon className="h-5 w-5" />
          </button>
        </div>
      </header>
      <div className="flex-1 grid grid-cols-7 gap-4 p-6">
        <div className="bg-gray-900 text-white py-2 px-4 rounded-md font-medium">Sun</div>
        <div className="bg-gray-900 text-white py-2 px-4 rounded-md font-medium">Mon</div>
        <div className="bg-gray-900 text-white py-2 px-4 rounded-md font-medium">Tue</div>
        <div className="bg-gray-900 text-white py-2 px-4 rounded-md font-medium">Wed</div>
        <div className="bg-gray-900 text-white py-2 px-4 rounded-md font-medium">Thu</div>
        <div className="bg-gray-900 text-white py-2 px-4 rounded-md font-medium">Fri</div>
        <div className="bg-gray-900 text-white py-2 px-4 rounded-md font-medium">Sat</div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 relative">
          <p className="text-gray-500 dark:text-gray-400 text-sm">28</p>
          <div className="mt-2 space-y-2">
            <div
              className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs font-medium">Task: Finish report</div>
            <div
              className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium">
              Event: Team meeting
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 relative">
          <p className="text-gray-500 dark:text-gray-400 text-sm">29</p>
          <div className="mt-2 space-y-2">
            <div
              className="bg-yellow-500 text-white px-2 py-1 rounded-md text-xs font-medium">
              Task: Prepare presentation
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 relative">
          <p className="text-gray-500 dark:text-gray-400 text-sm">30</p>
          <div className="mt-2 space-y-2">
            <div
              className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
              Task: Review contract
            </div>
            <div
              className="bg-purple-500 text-white px-2 py-1 rounded-md text-xs font-medium">
              Event: Client call
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 relative">
          <p className="text-gray-500 dark:text-gray-400 text-sm">1</p>
          <div className="mt-2 space-y-2">
            <div
              className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs font-medium">
              Task: Finish wireframes
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 relative">
          <p className="text-gray-500 dark:text-gray-400 text-sm">2</p>
          <div className="mt-2 space-y-2">
            <div
              className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium">
              Event: Company offsite
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 relative">
          <p className="text-gray-500 dark:text-gray-400 text-sm">3</p>
          <div className="mt-2 space-y-2">
            <div
              className="bg-yellow-500 text-white px-2 py-1 rounded-md text-xs font-medium">
              Task: Conduct user research
            </div>
            <div
              className="bg-purple-500 text-white px-2 py-1 rounded-md text-xs font-medium">
              Event: Design review
            </div>
          </div>
        </div>
      </div>
    </div>
    <Popover>
      <PopoverTrigger asChild>
        <div
          className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs font-medium cursor-pointer">
          Task: Finish report
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Finish report</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Complete the quarterly sales report for the executive team.
          </p>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">
              <CalendarIcon className="h-4 w-4 mr-1 inline" />
              April 30, 2023
            </div>
            <div className="text-sm font-medium">
              <UserIcon className="h-4 w-4 mr-1 inline" />
              John Doe
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">
              <TagIcon className="h-4 w-4 mr-1 inline" />
              Report
            </div>
            <div className="text-sm font-medium">
              <CircleCheckIcon className="h-4 w-4 mr-1 inline" />
              In Progress
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </>);
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


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>)
  );
}


function CircleCheckIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
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


function TagIcon(props) {
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
        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
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
