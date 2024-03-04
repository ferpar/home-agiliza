import styles from "./About.module.css";
import FeatureArray from "../FeatureArray/FeatureArray";

export default function About() {
  return (
    <section className={styles["about"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["text"]}>
          <p>
            <strong>Agiliza Seller</strong> es una herramienta específica para
            vendedores de amazon
          </p>
          <br />
        </div>
          <FeatureArray />
      </div>
    </section>
  );
}
