import React from "react";

import Main from "./_components/main";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col ">
      <Main />
      {children}
    </div>
  );
};

export default Layout;
