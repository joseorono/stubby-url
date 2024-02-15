import BsCenteredContainer from "../bs-centered-container"



export function HomeFeatures() {
  return (
    <section className="w-full pb-12 md:pb-20">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2> {/* mb-8  */}
        </div>
        <BsCenteredContainer className="max-w-4xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center justify-center space-y-2 px-4">
            <UserIcon className="w-20 h-20 rounded-full bg-gray-100 p-5 text-2xl text-gray-500 shadow-inset dark:bg-gray-800 dark:text-gray-400 mt-8 mb-6" />
            <h3 className="text-xl font-bold ">Easy</h3>
            <p className="text-sm tracking-wide/2 text-gray-500 dark:text-gray-400 px-2">
              Our URL Shortener is incredibly easy to use. Simply paste your long URL, click a button, and instantly get
              a shortened URL.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 px-4">
            <ShieldIcon className="w-20 h-20 rounded-full bg-gray-100 p-5 text-2xl text-gray-500 shadow-inset dark:bg-gray-800 dark:text-gray-400 mt-8 mb-6" />
            <h3 className="text-xl font-bold ">Reliable</h3>
            <p className="text-sm tracking-wide/2 text-gray-500 dark:text-gray-400 px-2">
              We guarantee the reliability of our URL Shortener. Your shortened URLs will always be accessible and
              redirect users to the intended destination.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 px-4">
            <RulerIcon className="w-20 h-20 rounded-full bg-gray-100 p-5 text-2xl text-gray-500 shadow-inset dark:bg-gray-800 dark:text-gray-400 mt-8 mb-6" />
            <h3 className="text-xl font-bold ">Shortened</h3>
            <p className="text-sm tracking-wide/2 text-gray-500 dark:text-gray-400 px-2">
              Our URL Shortener generates short URLs using only 8 characters. This allows for easy sharing and reduces
              the likelihood of typing errors.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 px-4">
            <LockIcon className="w-20 h-20 rounded-full bg-gray-100 p-5 text-2xl text-gray-500 shadow-inset dark:bg-gray-800 dark:text-gray-400 mt-8 mb-6" />
            <h3 className="text-xl font-bold ">Secure</h3>
            <p className="text-sm tracking-wide/2 text-gray-500 dark:text-gray-400 px-2">
              Security is our top priority. Our URL Shortener employs robust measures to protect your data and prevent
              unauthorized access to your shortened URLs.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 px-4">
            <BarChartIcon className="w-20 h-20 rounded-full bg-gray-100 p-5 text-2xl text-gray-500 shadow-inset dark:bg-gray-800 dark:text-gray-400 mt-8 mb-6" />
            <h3 className="text-xl font-bold ">Statistics</h3>
            <p className="text-sm tracking-wide/2 text-gray-500 dark:text-gray-400 px-2">
              Gain insights into your URL performance with our comprehensive statistics feature. Track the number of
              clicks, referral sources, and more.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 px-4">
            <PhoneIcon className="w-20 h-20 rounded-full bg-gray-100 p-5 text-2xl text-gray-500 shadow-inset dark:bg-gray-800 dark:text-gray-400 mt-8 mb-6" />
            <h3 className="text-xl font-bold ">Devices</h3>
            <p className="text-sm tracking-wide/2 text-gray-500 dark:text-gray-400 px-2">
              Access our URL Shortener from any device, whether it's a smartphone, tablet, or computer. Enjoy seamless
              shortening and tracking on the go.
            </p>
          </div>
        </BsCenteredContainer>
      </div>
    </section>
  )
}


function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function ShieldIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  )
}


function RulerIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </svg>
  )
}


function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function BarChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
