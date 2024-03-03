import styles from "./page.module.css";
import { getString } from "../helpers/i18n";
import Hero from "../components/Hero";
import About from "../components/About";
import Highlight from "@/components/Highlight";
import Triptic from "@/components/Triptic/Triptic";
import Team from "@/components/Team";

export const metadata = {
  title: "Inicio | Centro León Hebreo",
  description: getString("DESCRIPTION"),
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Highlight />
      <Triptic />
      <Team />
    </main>
  );
}
