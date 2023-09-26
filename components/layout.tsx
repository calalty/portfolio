import React, { PropsWithChildren } from "react";
import NavBar from "./nav-bar/nav-bar";
import { useActiveSection } from "@/hooks/use-active-section/use-active-section";
import { useRouter } from "next/router";
import { syneBody } from "@/global/fonts";

const Layout = ({ children }: PropsWithChildren) => {
  const { activeSectionValue } = useActiveSection();

  const router = useRouter();

  const routesWithoutNavbar = router.pathname === "/resume";

  return (
    <div
      className={syneBody.className}
      id="app"
      data-current-section={activeSectionValue}
    >
      {!routesWithoutNavbar && <NavBar />}
      {children}
    </div>
  );
};
export default Layout;
