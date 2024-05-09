
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    (<main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
      <div className="grid gap-8 md:gap-12 lg:gap-16">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Manage Your Data with Confidence</h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">
            Take control of your task management data with our robust data management features. Securely export, import,
            and backup your information, while customizing your storage settings to fit your needs.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="rounded-lg border border-gray-200 p-6 space-y-4 dark:border-gray-800">
            <div
              className="bg-gray-100 dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
              <DownloadIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold">Data Export</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Easily export your task data in various formats, including CSV and JSON, for backup or integration with
              other tools.
            </p>
            <Button size="sm">Learn More</Button>
          </div>
          <div
            className="rounded-lg border border-gray-200 p-6 space-y-4 dark:border-gray-800">
            <div
              className="bg-gray-100 dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
              <UploadIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold">Data Import</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Seamlessly import data from other task management tools, ensuring a smooth transition and consistent data
              across your workflows.
            </p>
            <Button size="sm">Learn More</Button>
          </div>
          <div
            className="rounded-lg border border-gray-200 p-6 space-y-4 dark:border-gray-800">
            <div
              className="bg-gray-100 dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
              <DatabaseBackupIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold">Data Backup</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Protect your valuable task data with our secure backup options, ensuring you can restore your information
              at any time.
            </p>
            <Button size="sm">Learn More</Button>
          </div>
          <div
            className="rounded-lg border border-gray-200 p-6 space-y-4 dark:border-gray-800">
            <div
              className="bg-gray-100 dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
              <SettingsIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold">Storage Settings</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Customize your data storage settings to optimize performance and meet your specific needs, whether you
              prefer local or cloud-based storage.
            </p>
            <Button size="sm">Learn More</Button>
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-16 lg:mt-20 grid gap-8 md:gap-12 lg:gap-16">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Secure and Efficient Data Management</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">
            At the core of our data management features are robust security and efficiency measures to protect your
            valuable task information.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="rounded-lg border border-gray-200 p-6 space-y-4 dark:border-gray-800">
            <div
              className="bg-gray-100 dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
              <LockIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold">Data Encryption</h3>
            <p className="text-gray-500 dark:text-gray-400">
              All your task data is encrypted at rest and in transit, ensuring your information remains secure and
              protected.
            </p>
            <Button size="sm">Learn More</Button>
          </div>
          <div
            className="rounded-lg border border-gray-200 p-6 space-y-4 dark:border-gray-800">
            <div
              className="bg-gray-100 dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
              <ShieldIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold">GDPR Compliance</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our data management practices adhere to the General Data Protection Regulation (GDPR) to ensure your
              personal information is handled responsibly.
            </p>
            <Button size="sm">Learn More</Button>
          </div>
          <div
            className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 space-y-4">
            <div
              className="bg-gray-100 dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
              <GaugeIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold">High-Performance</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our data management infrastructure is designed for optimal performance, ensuring fast and reliable access
              to your task information.
            </p>
            <Button size="sm">Learn More</Button>
          </div>
        </div>
      </div>
    </main>)
  );
}

function DatabaseBackupIcon(props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 12a9 3 0 0 0 5 2.69" />
      <path d="M21 9.3V5" />
      <path d="M3 5v14a9 3 0 0 0 6.47 2.88" />
      <path d="M12 12v4h4" />
      <path
        d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
    </svg>)
  );
}


function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>)
  );
}


function GaugeIcon(props) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>)
  );
}


function LockIcon(props) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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


function ShieldIcon(props) {
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
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>)
  );
}


function UploadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>)
  );
}
