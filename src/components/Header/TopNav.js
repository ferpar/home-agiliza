import Link from "next/link";
import styles from "./Header.module.css";
import { getString } from "../../helpers/i18n";
import headerLinks from "./headerLinks";

export default function TopNav({ actualPath, handlePathChange}) {
  return (
    <nav className={styles["top-nav"]}>
      <ul className={styles["header-nav-links"]}>
        {headerLinks.map((link) => (
          <li
            key={link.name}
            className={`${styles["header-nav-link"]} ${
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
