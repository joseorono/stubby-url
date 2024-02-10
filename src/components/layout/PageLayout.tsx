

import { MobileNav } from "~/components/header/mobile-nav";
import { DesktopNav } from "~/components/header/desktop-nav";

const PageLayout:React.FC<ILayoutComponentProps> = 
({
  pageTitle = "Stubby - URL Shortener",
  pageDescription = "",
  children
 }: ILayoutComponentProps) => {

    return (
        <>
        <header>
            <DesktopNav />
            <MobileNav />
        </header>
        </>
    )
    

}

export default PageLayout;

