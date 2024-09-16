import styles from "./About.module.css";
import FeatureArray from "../FeatureArray/FeatureArray";

export default function About({ dict }) {
  return (
    <section className={styles["about"]}>
      <div className={styles["wrapper"]}>
        <div className={styles["text"]} style={{paddingBottom: "2rem"}}>
          <p className={styles["mainText"]}>
            <strong>{dict["TITLE"]}</strong>
            {dict["ABOUT_1"]}
          </p>
          <p style={{ fontSize: "2rem" }}>
            {dict["ABOUT_2"]}
          </p>
        </div>
        <FeatureArray dict={dict}/>
        <p style={{ fontSize: "2rem", paddingTop: "2rem" }}>
          {dict["ABOUT_3"]}
        </p>
      </div>
    </section>
  );
}
