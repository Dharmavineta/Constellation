import { ClerkProvider } from "@clerk/nextjs";
import React, { FC } from "react";

type props = {
  children: React.ReactNode;
};

const layout: FC<props> = ({ children }) => {
  return (
    <ClerkProvider>
      <main className="h-full items-center justify-center flex">
        {children}
      </main>
      ;
    </ClerkProvider>
  );
};

export default layout;
