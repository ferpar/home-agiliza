import Link from "next/link";
import styles from "./LogUser.module.css";

export default function LogUser() {
  return (
    <div className={styles.wrapper}>
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign Up</Link>
    </div>
  );
}
