
import { Button } from "~/components/ui/button"
import Link from "next/link"

import { HamburgerMenuIcon }  from '@radix-ui/react-icons'

export function MobileNav() {
  return (
    <nav className="grid w-full min-h-[400px] border-t">
      <div className="md:hidden">
        <div>
          <Button className="fixed top-4 right-4 z-10" size="icon" variant="outline">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
        <div>
          <div className="flex flex-col h-full py-4">
            <div>
              <Button size="icon" variant="outline">
                <XIcon className="w-6 h-6" />
                <span className="sr-only">Close menu</span>
              </Button>
              <Link className="ml-2 text-lg font-bold tracking-tighter sm:hidden" href="#">
                Stubby
              </Link>
            </div>
            <div className="grid gap-4 px-4">
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/">
                Home
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/shorten">
                Shorten
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/contact-us">
                Contact Us
              </Link>
            </div>
            <div>
              <Button className="w-full">Sign Up</Button>
              <p className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">
                Existing customer?
                <Link className="underline" href="#">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden items-center justify-center px-4 md:grid h-14 md:h-20">
        <Link className="text-sm font-medium tracking-tighter" href="#">
          Home
        </Link>
        <Link className="ml-4 text-sm font-medium tracking-tighter" href="#">
          Shorten
        </Link>
        <Link className="ml-auto text-sm font-medium tracking-tighter" href="#">
          Contact Us
        </Link>
      </div>
    </nav>
  )
}


function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
