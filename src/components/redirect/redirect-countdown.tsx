'use client';

import React, { ReactNode, useEffect, useState } from 'react';

// Import react-circular-progressbar module and styles
// https://codesandbox.io/p/sandbox/vymm4oln6y?file=%2Findex.js%3A4%2C1-11%2C1
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ThinPageTitle from "~/components/header/thin-page-title"


const RedirectOnCountdown: React.FC<IRedirectCounterProps> = (
  {  
    targetUrl,
    msDuration = 5000
  }
  ) => {

  const [percentage, setPercentage] = useState<number>(0);

    useEffect(() => {
        const startTime = Date.now();
        const interval = setInterval(() => {
          const elapsedTime = Date.now() - startTime;
          const percent = Math.min((elapsedTime / msDuration) * 100, 100);
          setPercentage(percent);
          if (percent >= 100) {
            //console.log('Redirecting...');
            clearInterval(interval);
            document.location.href=targetUrl;
          }
        }, 100);
    
        return () => clearInterval(interval);
      }, [msDuration]);


  return (
  
  <>
        

        <div className='mx-auto my-4 w-40'>
            
          <CircularProgressbar
            //minValue={0}
            //maxValue={msDuration}
            className='break-words'
            value={percentage}
            text={"Almost..."}
            background
            backgroundPadding={6}
            styles={buildStyles({
            textSize: "0.8rem",
            backgroundColor: "hsl(var(--primary))",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"
            })}
          />

        </div>

        <div className='py-4'>
            <p className="text-center text-gray-500 text-sm/relaxed dark:text-gray-400">
                Redirecting to {targetUrl == "/" ? "Home Page" : targetUrl} in {(msDuration / 1000)} seconds...
            </p>
        </div>
  </>
  );
}

export default RedirectOnCountdown;

