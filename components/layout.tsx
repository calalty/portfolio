import React, { PropsWithChildren, useEffect, useState } from "react";
import NavBar from "./nav-bar/nav-bar";
import { useActiveSection } from "@/hooks/use-active-section/use-active-section";
import { useRouter } from "next/router";

const Layout = ({ children }: PropsWithChildren) => {
  const { activeSectionValue } = useActiveSection();

  const router = useRouter();

  const routesWithoutNavbar = router.pathname === "/resume";

  return (
    <div id="app" data-current-section={activeSectionValue}>
      {!routesWithoutNavbar && <NavBar />}
      {React.Children.map(children, (child) => React.cloneElement(child))}
    </div>
  );
};
export default Layout;
