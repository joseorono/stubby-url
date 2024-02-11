

import { MobileNav } from "~/components/header/mobile-nav";
import { DesktopNav } from "~/components/header/desktop-nav";
import Head from "next/head";
import PageFooter from "../footer/page-footer";
import Seo from "../Seo";

const PageLayout:React.FC<ILayoutComponentProps> = 
({
  pageTitle = "Stubby - URL Shortener",
  pageDescription = "A simple URL shortener built with tRPC and Next.js.",
  children
 }: ILayoutComponentProps) => {

    return (
        <>

        <Seo title={pageTitle} description={pageDescription} />
        
        <DesktopNav />
        <MobileNav />
    
        <main>
            {children}
        </main>

        <PageFooter />

        </>
    )
    

}

export default PageLayout;

