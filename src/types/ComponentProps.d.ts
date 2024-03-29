
interface ILayoutComponentProps {
    pageTitle?: string,
    pageDescription?: string,
    children?: ReactNode
}


interface PageTitleProps {
    title: string;
    description?: string;
}

interface IRedirectComponentProps {
    urlCode: string;
    targetUrl: string;
}

interface IRedirectCounterProps {
    targetUrl: string;
    msDuration: number;
}