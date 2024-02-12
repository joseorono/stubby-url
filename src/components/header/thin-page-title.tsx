

export default function ThinPageTitle(props: PageTitleProps) {
    return (
        <>
        <div className="bg-gray-50/9 dark:bg-background py-8 lg:py-12">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                <div className="space-y-3">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-primary">{props.title}</h1>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed  dark:text-foreground">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

