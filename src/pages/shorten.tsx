


import PageLayout from "~/components/layout/PageLayout"
import PageTitle from "~/components/header/page-title"
import { UrlShortenerForm } from "~/components/url_shortener"
import ThinPageTitle from "~/components/header/thin-page-title"
import UrlDisplayCard from "~/components/url-display-dard"

export default function ShortenPage() {
  return (
    <>
    <PageLayout>
      <ThinPageTitle title="Shorten URL" description="Enter a long URL to make it short and sweet." />
      <UrlShortenerForm />
      <div className="flex flex-col gap-4 mx-auto max-w-screen-sm">
        <UrlDisplayCard url="https://google.com/" clicks={3} />
        <UrlDisplayCard url="https://google.com/" clicks={5} />
      </div>
    </PageLayout>
    </>
  )
}
