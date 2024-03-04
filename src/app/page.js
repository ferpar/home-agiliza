import styles from "./page.module.css";
import { getString } from "../helpers/i18n";
import Hero from "../components/Hero";
import About from "../components/About";

export const metadata = {
  title: "Agiliza Seller",
  description: "Vende más, trabaja menos",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
    </main>
  );
}
