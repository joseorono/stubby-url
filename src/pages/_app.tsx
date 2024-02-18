import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import { Toaster } from "react-hot-toast";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>

    <Toaster
      
      toastOptions={{

        position: "bottom-center",

        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },

        style: {  
          background: 'hsl(var(--bg))',
          color: 'hsl(var(--foreground))',
          //fontWeight: '500',
          //fontSize: '0.875rem',
        },

        iconTheme: {
          primary: 'hsl(var(--primary))',
          //secondary: 'hsl(var(--secondary))',
          secondary: 'white',

        },

        /*
        // Styling 
        className: '',

        success: {
          style: {
            background: '#030e18',
            color: "#fff",
            fontWeight: "500",
          },
        },
        error: {
          style: {
            background: '#d32f2f',
            color: "#fff",
            fontWeight: "500",
          },
        },
        */
      }}
      />
    </>
    
    

  );
};

export default api.withTRPC(MyApp);
