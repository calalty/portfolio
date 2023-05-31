import React, { PropsWithChildren } from "react";
import NavBar from "./nav-bar";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
export default Layout;
