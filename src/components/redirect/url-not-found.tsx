import React, { ReactNode } from 'react';

import { cn } from "~/lib/utils"

import ThinPageTitle from "~/components/header/thin-page-title"

const RedirectUrlNotFound: React.FC<IRedirectComponentProps> = (
  { urlCode,
    targetUrl = "/"
  }
  ) => {
  return (
    <>
      <ThinPageTitle title="URL Not Found..." description="Redirecting to Home..." />
      <div className="mx-auto max-w-screen-lg">
      </div>
    </>
  );
}

export default RedirectUrlNotFound;

