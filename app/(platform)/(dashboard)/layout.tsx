import React, { FC } from "react";
import { Navbar } from "./_components/navbar";

type props = {
  children: React.ReactNode;
};

const layout: FC<props> = ({ children }) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
