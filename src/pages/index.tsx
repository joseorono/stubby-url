/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/u1e5xxDXaDJ
 */
import Link from "next/link"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"

import { ArrowRightIcon } from "@radix-ui/react-icons"
import ThinPageTitle from "~/components/header/thin-page-title"
import PageLayout from "~/components/layout/PageLayout"

export default function HomePage() {
  return (
      <>
      <PageLayout>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container flex flex-col items-center px-4 md:px-6 space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Free URL Shortener
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Shorten your links and share them with the world. Enter your URL below to get started.
              </p>
            </div>
            <div className="flex justify-center">
              <Button className="my-4 w-full md:w-auto">
                  <ArrowRightIcon className="hidden md:inline-block mr-2" />
                  <span>
                    Shorten URL
                  </span>
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-200 dark:border-gray-800">
          <div className="container max-w-[768px] flex flex-col gap-4 px-4 md:px-6 text-center">
            <div className="space-y-4 ">
              <h2 className="text-3xl mb-8 font-bold tracking-tighter sm:text-4xl md:text-5xl">Why I Built This</h2>
              <div className="space-y-3 text-gray-500 text-lg leading-loose dark:text-gray-400">

                <p>
                  I built this URL Shortener to provide a simple and easy-to-use tool for shortening long URLs. Whether
                  you're sharing links on social media or just want to make a URL more manageable, our service has you
                  covered.
                </p>

                <p>
                  I also wanted to showcase how fast you can build production-ready apps using modern tools like&nbsp;
                  <Link className="underline" href="#">
                    Tailwind CSS
                  </Link>
                  ,&nbsp;
                  <Link className="underline" href="#">
                    Prisma
                  </Link>
                  ,&nbsp;
                  <Link className="underline" href="#">
                    tRPC
                  </Link>
                  , and&nbsp;
                  <Link className="underline" href="#">
                    Shadcn/ui
                  </Link>.
                </p>

              </div>
            </div>
            <div className="flex w-full max-w-sm mx-auto items-center justify-center gap-4 sm:gap-6 lg:gap-8 my-4">
              <WindIcon className="h-8 w-8" />
              <DatabaseIcon className="h-8 w-8" />
              <BracesIcon className="h-8 w-8" />
              <LayoutGridIcon className="h-8 w-8" />
            </div>
          </div>
        </section>
      </PageLayout>
        </>
      
  )
}


function MountainIcon(props:any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function WindIcon(props:any) {
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
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}


function DatabaseIcon(props: any) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function BracesIcon(props: any) {
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
      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
      <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
    </svg>
  )
}


function LayoutGridIcon(props: any) {
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}
