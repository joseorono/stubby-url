

export default function PageTitle(props: PageTitleProps) {
    return (
      <div className="bg-gray-100 dark:bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center min-h-[400px] py-8 space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-6xl/none dark:text-primary">{props.title}</h1>
              {
                props.description && 
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-foreground">
                    {props.description}
                </p>
              }
            </div>
          </div>
        </div>
      </div>
    )
}

