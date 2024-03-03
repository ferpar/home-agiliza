import styles from "./Highlighted.module.css";
import { getString } from "../../helpers/i18n";

export default function Highlighted() {
  return (
    <section className={styles["highlighted"]}>
      <div className={styles["img-wrapper"]}>
        <img src="/images/floralmotive.webp" alt="cover" />
      </div>
      <div className={styles["heading"]}>
        <div className={styles["heading-top"]}>
          <h1>{getString("COURSES")}</h1>
          <p>{getString("COURSE_INTRO")}</p>
          <h2>{getString("LIGHTHOUSE")}</h2>
          <p>{getString("LIGHTHOUSE_DESCRIPTION3")}</p>
        </div>
        <div className={styles["heading-bottom"]}>
          <p>{getString("LIGHTHOUSE_SYNOPSIS1")}</p>
          <p>{getString("LIGHTHOUSE_SYNOPSIS2")}</p>
        </div>
      </div>
    </section>
  );
}
