"use client";
import React from "react";
import { NavContext } from "../NavContext";
import styles from "./Header.module.css";
import headerLinks from "./headerLinks";
import TopNav from "./TopNav";
import Hamburger from "../Hamburger";
import SideNav from "./SideNav";
import LogUser from "./LogUser/LogUser";
import Image from "next/image";

function Header({ path }) {
  const [scrolled, setScrolled] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const { currentPath, setCurrentPath } = React.useContext(NavContext);

  const checkScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // this is to detect change of url when using the top/side nav Links
  const handlePathChange = (newURL) => {
    setCurrentPath(newURL);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  // consolidating the path to be used in the header
  // when rendering on the server, use the path from the request headers
  const actualPath = currentPath ? currentPath : path;

  const externalPage = headerLinks.find((link) => link.path === actualPath)
    ? false
    : true;

  const darkTheme = externalPage
    ? true
    : headerLinks.find((link) => link.path === actualPath)?.darkTheme;

  return (
    <>
      <div
        className={
          `${styles["wrapper"]} ` +
          `${darkTheme ? styles["dark-theme"] : ""} ` +
          `${scrolled || isOpen ? styles["scrolled"] : ""} ` +
          `${externalPage ? styles["external-page"] : ""} `
        }
      >
        <a className={styles["logo-wrapper"]} href="/">
          <Image
            width={50}
            height={50}
            src="/images/logo.svg"
            alt="Agiliza Seller logo"
            className={`${styles["logo"]} ${
              scrolled && !isOpen && styles["logo-scrolled"]
            }`}
          />
          <h3>Agiliza Seller</h3>
        </a>
        <TopNav actualPath={actualPath} handlePathChange={handlePathChange} />
        <LogUser />
        <Hamburger
          darkTheme={darkTheme && !scrolled}
          hide={true}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
      <SideNav
        actualPath={actualPath}
        handlePathChange={handlePathChange}
        isOpen={isOpen}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}

export default Header;
