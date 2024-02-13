

import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "~/components/ui/avatar"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "~/components/ui/dropdown-menu"

import { ThemeSwitcher } from "~/components/theme-switcher"

export function DesktopNav() {
  return (
    <header className="flex items-center h-16 px-4 md:px-6 w-full border-b">
      <Link className="flex items-center gap-2 font-semibold" href="/">
        Shortener
      </Link>
      <div className="flex-1 justify-end hidden gap-4 md:flex">
        <Link className="text-sm font-medium transition-colors hover:text-gray-900" href="/">
          Home
        </Link>
        <Link className="text-sm font-medium transition-colors hover:text-gray-900" href="/shorten">
          Shorten a URL
        </Link>
        <Link className="text-sm font-medium transition-colors hover:text-gray-900" href="/contact-us">
          Contact Us
        </Link>
      </div>
      <div className="mx-4">
        <ThemeSwitcher />
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger className="hover:cursor-pointer" asChild>
            <Avatar className="h-9 w-9">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JP</AvatarFallback>
              <span className="sr-only">Toggle user menu</span>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="hover:cursor-pointer">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:cursor-pointer">
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:cursor-pointer">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
