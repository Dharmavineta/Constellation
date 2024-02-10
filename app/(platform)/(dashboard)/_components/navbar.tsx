import Logo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import React from "react";
import MobileSidebar from "./MobileSidebar";

export const Navbar = () => {
  return (
    <nav className="fixed z-50 px-4 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center">
      <MobileSidebar />

      <div className="flex items-center gap-x-4">
        <div className="hidden lg:flex">
          <Logo />
        </div>
        <Button
          size={"sm"}
          variant={"primary"}
          className="rounded-sm hidden lg:block h-auto py-1.5 px-2"
        >
          Create
        </Button>
        <Button
          variant={"primary"}
          size={"sm"}
          className="rounded-sm block lg:hidden"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={"/organization/:id"}
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl={"/organization/:id"}
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: { height: 30, width: 30 },
            },
          }}
        />
      </div>
    </nav>
  );
};