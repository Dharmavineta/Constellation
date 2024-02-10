import React, { FC } from "react";
import { Sidebar } from "../_components/sidebar";

type props = {
  children: React.ReactNode;
};

const layout: FC<props> = ({ children }) => {
  return (
    <main className="pt-20 lg:pt-24 max-w-6xl mx-auto 2xl:max-w-screen-xl">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden lg:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  );
};

export default layout;
