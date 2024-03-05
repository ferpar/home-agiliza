"use client";
import React from "react";
import { NavContext } from "../NavContext";
import styles from "./Footer.module.css";
import Link from "next/link";
import { getString } from "../../helpers/i18n";

const footerLinks = [
  {
    name: "TERMINOS",
    path: "/terminos-condiciones",
  },
  {
    name: "PRIVACY",
    path: "/politica-de-privacidad",
  },

  // {
  //   name: "COOKIES",
  //   path: "/configuracion-de-cookies",
  // },
];

function Footer() {
  const { setCurrentPath } = React.useContext(NavContext);

  const handlePathChange = (newURL) => {
    setCurrentPath(newURL);
  };

  return (
    <footer className={styles["site-footer"]}>
      <div className={styles["footer-contact"]}>
        <h3>Contáctanos</h3>
        <a href="mailto:hola@agilizaseller.com">hola@agilizaseller.com</a>
        <a
          href="https://www.google.com/maps/place/C.+de+Clara+del+Rey,+36,+Chamart%C3%ADn,+28002+Madrid"
          target="_blank"
        >
          {getString("ADDRESS")}
        </a>
      </div>
      <nav>
        <ul className={styles["footer-nav-links"]}>
          {footerLinks.map((link) => (
            <li key={link.name} className={`${styles["footer-nav-link"]}`}>
              <Link
                href={link.path}
                onClick={() => handlePathChange(link.path)}
              >
                {getString(link.name)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
