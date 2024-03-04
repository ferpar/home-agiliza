import { getString } from "../../helpers/i18n";
import styles from "./About.module.css";
import Image from "next/image";
import FadeIn from "../FadeIn";
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
          <br/>
        </div>
        <FeatureArray />
        {/* <FadeIn>
          <img
            src="/images/mosaic.webp"
            alt="bible"
            className={styles["about-img"]}
          />
        </FadeIn> */}
      </div>
    </section>
  );
}
