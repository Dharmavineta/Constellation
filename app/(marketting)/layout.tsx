import React, { FC } from "react";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

type props = {
  children: React.ReactNode;
};

const layout: FC<props> = ({ children }) => {
  return (
    <div className=" h-full">
      <Navbar />
      <main className="pt-40 pb-20 bg-slate-100 h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
