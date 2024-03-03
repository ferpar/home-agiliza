import { getString } from "../../helpers/i18n";
import styles from "./Hero.module.css";

const title = getString("TITLE");
const subtitle = getString("SUBTITLE");
const welcome = getString("WELCOME");
const description = getString("DESCRIPTION");

export default function Hero() {
    return (
      <section className={styles["hero"]}>
        <div className={styles["background"]}>
          <img src="/images/coin.webp" alt="hero" className={styles["hero-img"]} />
        </div>
        <div className={styles["overlay"]} />
        <div className={`${styles["content"]} max-width-wrapper`}>
          <h3>{title}
          <br/>
          <span className={styles["subtitle"]}>{subtitle}</span>
          </h3>
          <p>{welcome}</p>
          <br/>
          <p>{description}</p>
        </div>
      </section>
    )
}