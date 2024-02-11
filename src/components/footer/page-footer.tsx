
import Link from "next/link"

import SocialMediaIcons from "~/components/social-media"

export default function PageFooter() {
  return (
    <footer className="bg-gray-200">
      <div className="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto  lg:justify-between">
        <div className="flex flex-wrap justify-center">
          <ul className="flex items-center space-x-4">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/shorten"}>Shorten a URL</Link></li>
            <li><Link href={"/contact-us"}>Contact US</Link></li>
          </ul>
        </div>
        <div className="flex justify-center space-x-4 mt-4 lg:mt-0">
            <SocialMediaIcons />
        </div>
      </div>
      <div className="pb-2">
        <p className="text-center">
          @2024 All rights reserved by your website.
        </p>
      </div>
    </footer>
  )
}

