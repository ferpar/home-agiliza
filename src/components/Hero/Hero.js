import Image from "next/image";
import { getString } from "../../helpers/i18n";
import styles from "./Hero.module.css";


const title = getString("TITLE");
const subtitle = getString("SUBTITLE");
const welcome = getString("WELCOME");
const description = getString("DESCRIPTION");

export default function Hero() {
  return (
    <section className={styles["hero"]}>
      <div className={styles["overlay"]} />
      <section className={styles["hero-main"]}>
        <div className={`${styles["content"]} `}>
          <h1>
            <span className={styles["subtitle"]}>{subtitle}</span>
          </h1>
          <p>{welcome}</p>
          <br />
          <p>{description}</p>
        </div>
        <div className={styles["background"]}>
          <Image
            src="/images/Cotizaciones.png"
            alt="hero"
            className={styles["hero-img"]}
            width={936}
            height={422}
          />
        </div>
      </section>
    </section>
  );
}
