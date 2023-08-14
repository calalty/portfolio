import React, { PropsWithChildren, useState } from "react";
import NavBar from "./nav-bar/nav-bar";
import Modal from "./modal/modal";

const Layout = ({ children }: PropsWithChildren) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleOnClick = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <NavBar handleOnClick={handleOnClick} toggle={toggle} />
      <Modal active={toggle} />
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { toggle })
      )}
    </>
  );
};
export default Layout;
