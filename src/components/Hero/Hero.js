import Image from "next/image";
import styles from "./Hero.module.css";
import quotesEN from "./QuotesEN.gif"
import quotesES from "./QuotesES.gif"

export default function Hero({ dict, lang }) {
  return (
    <section className={styles["hero"]}>
      <div className={styles["overlay"]} />
      <section className={styles["hero-main"]}>
        <div className={`${styles["content"]} `}>
          <h1>
            <span className={styles["subtitle"]}>{dict["SUBTITLE"]}</span>
          </h1>
          <p>{dict["WELCOME"]}</p>
          <br />
          <p>{dict["DESCRIPTION"]}</p>
        </div>
        <div className={styles["background"]}>
          <Image
            src={lang === "es" ? quotesES : quotesEN}
            alt="hero"
            className={styles["hero-img"]}
            width={1920}
            height={969}
            priority
          />
        </div>
      </section>
    </section>
  );
}
