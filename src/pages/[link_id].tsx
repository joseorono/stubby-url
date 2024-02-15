

'use client';

import { Label } from "~/components/ui/label"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Button } from "~/components/ui/button"
import PageLayout from "~/components/layout/PageLayout"


import { useRouter } from 'next/router'

// View Components
import RedirectNotice from "~/components/redirect/redirecting-to-url"
import RedirectUrlNotFound from "~/components/redirect/url-not-found"
import RedirectOnCountdown from "~/components/redirect/redirect-countdown";

export default function ContactUsPage() {
    const router = useRouter()
    let { link_id } = router.query
    
    const targetUrl = "https://www.google.com"
    const urlCode = "cda123456"
    let wasUrlFound = false

    if (!link_id) {
        // ToDo: Display Error Component or Home redirect 
        return null
        wasUrlFound = false
    }
    if (typeof link_id !== "string") {
        // check if it's an array
        if (Array.isArray(link_id)) {
            link_id = link_id[0]
        }
    }

    
    return (
    <PageLayout>
        {
        wasUrlFound
        ?
        <>
            <RedirectNotice urlCode={urlCode} targetUrl={targetUrl} />
            <RedirectOnCountdown targetUrl={targetUrl} msDuration={5000} />
        </>
        :
        <>
            <RedirectUrlNotFound urlCode={urlCode} targetUrl={targetUrl} />
            <RedirectOnCountdown targetUrl={"/"} msDuration={3000} />
        </>
        }

    </PageLayout>
    )
}

