
import React, { ReactNode } from 'react';

import { cn } from "~/lib/utils"

interface IContainerProps {
  children: ReactNode;
  className?: string;
}

const BsCenteredContainer: React.FC<IContainerProps> = (
  { children,
    className = ""
  }
  ) => {
  return (
    <div className={cn(
        "mx-auto max-w-screen-lg ", 
        className
        )}>
      {children}
    </div>
  );
}

export default BsCenteredContainer;

