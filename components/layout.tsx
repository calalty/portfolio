import React, { PropsWithChildren } from "react";
import NavBar from "./nav-bar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      {children}
      <div className="bg-noise noise bg-cover bg-no-repeat bg-center" />
    </>
  );
};
export default Layout;
