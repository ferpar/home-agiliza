import Image from "next/image";
import styles from "./Hero.module.css";
import cotizaciones from "./Cotizaciones.gif"

export default function Hero({ dict }) {
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
            src={cotizaciones}
            alt="hero"
            className={styles["hero-img"]}
            width={1920}
            height={969}
          />
        </div>
      </section>
    </section>
  );
}
