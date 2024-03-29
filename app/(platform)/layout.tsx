import { ClerkProvider } from "@clerk/nextjs";
import React, { FC } from "react";

type props = {
  children: React.ReactNode;
};

const layout: FC<props> = ({ children }) => {
  return (
    <ClerkProvider>
      <main>{children}</main>
    </ClerkProvider>
  );
};

export default layout;
