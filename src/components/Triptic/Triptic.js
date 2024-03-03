import styles from "./Triptic.module.css";
import { getString } from "../../helpers/i18n";

function Triptic() {
  return (
    <section className={styles["triptic"]}>
      <div className="max-width-wrapper">
        <article>
          <div className={styles["img-wrapper"]}><img src="/images/erudite.webp" alt="Erudite" /></div>
          <div>
            <p className={styles["article-heading"]}>
              <strong>{getString("OUR_NAME")}</strong>
            </p>
            <p>{getString("OUR_NAME_DESC1")}</p>
            <p>{getString("OUR_NAME_DESC2")}</p>
            <p>{getString("OUR_NAME_DESC3")}</p>
          </div>
        </article>
        <article>
          <div className={styles["img-wrapper"]}><img src="/images/magniglass.webp" alt="Project" /></div>
          <div>
            <p className={styles["article-heading"]}>
              <strong>{getString("OUR_PROJECT")}</strong>
            </p>
            <p>{getString("OUR_PROJECT_DESC")}</p>
          </div>
        </article>
        <article>
          <div className={styles["img-wrapper"]}><img src="/images/auschwitz.webp" alt="Project" /></div>
          <div>
            <p className={styles["article-heading"]}>
              <strong>{getString("OUR_MOTIVATION")}</strong>
            </p>
            <p>{getString("OUR_MOTIVATION_DESC1")}</p>
            <p>{getString("OUR_MOTIVATION_DESC2")}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Triptic;
