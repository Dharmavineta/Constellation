import React, { FC } from "react";
import OrgControl from "./_components/OrgControl";
type props = {
  children: React.ReactNode;
};

const layout: FC<props> = ({ children }) => {
  return (
    <div>
      <OrgControl />
      {children}
    </div>
  );
};

export default layout;
