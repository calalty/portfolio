import React, { PropsWithChildren, useEffect, useState } from "react";
import NavBar from "./nav-bar/nav-bar";
import Modal from "./modal/modal";
import { useActiveSection } from "@/hooks/use-active-section/use-active-section";
import { sections } from "@/global";
import { PageNavigation } from "./page-navigation/page-navigation";

const Layout = ({ children }: PropsWithChildren) => {
  const { activeSectionValue } = useActiveSection();

  return (
    <div id="app" data-current-section={activeSectionValue}>
      <NavBar />
      {React.Children.map(children, (child) => React.cloneElement(child))}
    </div>
  );
};
export default Layout;
