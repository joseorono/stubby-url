


import PageLayout from "~/components/layout/PageLayout"
import PageTitle from "~/components/header/page-title"
import { UrlShortenerForm } from "~/components/url_shortener"
import ThinPageTitle from "~/components/header/thin-page-title"

export default function ShortenPage() {
  return (
    <>
    <PageLayout>
      <ThinPageTitle title="Shorten URL" description="Enter a long URL to make it short and sweet." />
      <UrlShortenerForm />
    </PageLayout>
    </>
  )
}
