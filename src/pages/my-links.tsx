

import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "~/components/ui/select"
import { Button } from "~/components/ui/button"
import ThinPageTitle from "~/components/header/thin-page-title"
import { UrlShortenerForm } from "~/components/url_shortener"

import { CopyIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import PageLayout from "~/components/layout/PageLayout"

export default function MyLinksPage() {
  return (
    <>
    <PageLayout>
    
    <ThinPageTitle title="My Links" description="View and manage your shortened URLs." />
    <div className="">
      <UrlShortenerForm />
      <div className="flex flex-col items-center justify-center h-full">
        
        <div className="w-full max-w-md p-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Your Shortened URLs</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
              <div>
                <p className="text-sm text-gray-900 dark:text-white mb-1">
                  <Link className="hover:underline" href="#">stub.by/7tYh1</Link>
                </p>
                <p className="text-xs text-gray-500">Clicked 24 times</p>
              </div>
              <Button size="sm" variant="outline" className="py-4">
                <CopyIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
              <div>
                <p className="text-sm text-gray-900 dark:text-white mb-1">
                  <Link className="hover:underline" href="#">stub.by/7tYh1</Link>
                </p>
                <p className="text-xs text-gray-500">Clicked 67 times</p>
              </div>
              <Button size="sm" variant="outline" className="py-4">
                <CopyIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </PageLayout>
    </>
  )
}
