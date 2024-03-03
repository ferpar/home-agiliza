import { getString } from "../../helpers/i18n";
import styles from "./About.module.css";
import Image from "next/image";
import FadeIn from "../FadeIn";

export default function About() {
  return (
    <section className={styles["about"]}>
      <div className={styles["wrapper"]}>
        <FadeIn>
          <img
            src="/images/mosaic.webp"
            alt="bible"
            className={styles["about-img"]}
          />
        </FadeIn>
        <div className={styles["text"]}>
          <h3>{getString("TITLE")}</h3>
          <p>{getString("ABOUT")}</p>
        </div>
      </div>
    </section>
  );
}
