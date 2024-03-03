import Link from "next/link";
import styles from "./Header.module.css";
import { getString } from "../../helpers/i18n";
import headerLinks from "./headerLinks";

export default function SideNav({ actualPath, handlePathChange, isOpen, onClick }) {
  return (
    <nav className={
      `${styles["side-nav"]} ` + 
      `${isOpen ? styles["open-side-nav"] : ""}`
    }
        onClick={() => onClick()}
    >
      <ul
        className={
          `${styles["side-nav-links"]} ` +
          `${isOpen ? styles["open-side-nav-links"] : ""}`
        }
      >
        {headerLinks.map((link) => (
          <li
            key={link.name}
            className={`${styles["side-nav-link"]} ${
              actualPath === link.path ? styles["active"] : ""
            }`}
          >
            <Link href={link.path} onClick={() => handlePathChange(link.path)}>
              {getString(link.name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
