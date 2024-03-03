"use client";
import React from "react";
import { NavContext } from "../NavContext";
import styles from "./Footer.module.css";
import Link from "next/link";
import { getString } from "../../helpers/i18n";

const footerLinks = [
  {
    name: "LEGAL",
    path: "/aviso-legal",
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
        <a href="mailto:centroleonhebreo@gmail.com">
          centroleonhebreo@gmail.com
        </a>
        <div>
          <span>Whatsapp </span>
          <a href="tel:+34696982192">+34 696 982 192 </a>
        </div>
        <a
          href="https://www.google.com/maps/place/Camino+de+las+Fuentezuelas,+n%C2%B01,+casa+7,+18190+Cenes+de+la+Vega,+Granada,+Spain
"
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
