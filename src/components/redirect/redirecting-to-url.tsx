
import React, { ReactNode } from 'react';

// Import react-circular-progressbar module and styles
// https://codesandbox.io/p/sandbox/vymm4oln6y?file=%2Findex.js%3A4%2C1-11%2C1
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ThinPageTitle from "~/components/header/thin-page-title"


const RedirectNotice: React.FC<IRedirectComponentProps> = (
  {  
    urlCode = ""
  }
  ) => {

  const [percentage, setPercentage] = React.useState(30);

  return (
  <>
  <ThinPageTitle title="Redirecting..." description="Wait a moment." />
    <div className="flex items-center justify-center w-full min-h-[50vh] flex-col space-y-2 p-6 text-center">
        <div className="grid gap-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Redirecting</h1>
          <p className="text-gray-500 text-sm/relaxed dark:text-gray-400">
              You will be redirected to your desired URL shortly.
          </p>
          
          {
          urlCode &&
          <div className="text-gray-400 text-sm/relaxed dark:text-gray-300">
              URL ShortCode: <span className="hover:font-bold">{urlCode}</span>
          </div>
          }

          <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "--var(--bg-primary)",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
              })}
          />
        
      </div>

    </div>
  </>
  );
}

export default RedirectNotice;

