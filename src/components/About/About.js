import styles from "./About.module.css";
import FeatureArray from "../FeatureArray/FeatureArray";

export default function About() {
  return (
    <section className={styles["about"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["text"]}>
          <p className={styles["mainText"]}>
            <strong>Agiliza Seller</strong> es una herramienta específica para
            vendedores de amazon
          </p>
          <br />
          <p style={{ fontSize: "2rem" }}>
            Que permite las siguientes funcionalidades:
          </p>
          <br />
        </div>
        <FeatureArray />
        <br />
        <br />
        <p style={{ fontSize: "2rem" }}>
          Y esto es sólo el principio... Vamos a introducir muchas más
          funcionalidades en colaboración con los mejores sellers.
        </p>
      </div>
    </section>
  );
}
