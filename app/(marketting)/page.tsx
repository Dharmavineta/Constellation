import React from "react";
import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../../public/font/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarkettingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 Task Mangement
        </div>
        <h1 className="text-3xl lg:text-5xl text-center text-neutral-800 mb-6">
          Constellation helps team move
        </h1>
        <div className="text-3xl lg:text-5xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md  w-fit">
          Work Forward
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-lg lg:text-xl text-neutral-400 mt-3 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collaborate, Manage projects and reach peak productivity. From high
        rises to the home office, the way your team works is unique - accomplish
        all with constellation
      </div>
      <Button asChild className="mt-6" size={"lg"}>
        <Link href={"/register"}>Get Constellation for free</Link>
      </Button>
    </div>
  );
};

export default MarkettingPage;
