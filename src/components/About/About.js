import styles from "./About.module.css";
import FeatureArray from "../FeatureArray/FeatureArray";

export default function About({ dict }) {
  return (
    <section className={styles["about"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["text"]}>
          <p className={styles["mainText"]}>
            <strong>{dict["TITLE"]}</strong>
            {dict["ABOUT_1"]}
          </p>
          <br />
          <p style={{ fontSize: "2rem" }}>
            {dict["ABOUT_2"]}
          </p>
          <br />
        </div>
        <FeatureArray dict={dict}/>
        <br />
        <br />
        <p style={{ fontSize: "2rem" }}>
          {dict["ABOUT_3"]}
        </p>
      </div>
    </section>
  );
}
