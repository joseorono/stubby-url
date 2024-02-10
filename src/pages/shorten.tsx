
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"

export default function ShortenPage() {
  return (
    <>
      <div className="bg-gray-50/90 backdrop-blur-lg py-8 lg:py-12">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">URL Shortener</h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Enter a long URL to make it short and sweet.
            </p>
          </div>
          <div className="mx-auto max-w-sm space-y-2">
            <div className="flex rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800">
              <Input className="flex-1 min-w-0 rounded-lg" placeholder="Enter a URL" type="text" />
              <Button className="rounded-l-none" variant="default" size="icon">
                <LinkIcon className="w-4 h-4" />
                <span className="sr-only">Shorten</span>
              </Button>
            </div>
          </div>
          <div className="mx-auto max-w-sm space-y-2">
            <Button className="w-full">Shorten URL</Button>
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="mx-auto max-w-sm space-y-2">
            <div className="flex rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800">
              <Input className="flex-1 min-w-0 rounded-lg" placeholder="Shortened URL" type="text" />
              <Button className="rounded-l-none" variant="outline">
                <CopyIcon className="w-4 h-4" />
                <span className="sr-only">Copy</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


function LinkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function CopyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}
