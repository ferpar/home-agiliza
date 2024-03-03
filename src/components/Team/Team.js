import styles from "./Team.module.css";
import { getString } from "../../helpers/i18n";

function Team() {
  return (
    <section className={styles["team"]}>
      <div>
        <img src="/images/teamBg.webp" alt="Team" />
      </div>
      <div className={styles["overlay"]}></div>
      <div className={ `${styles['content']} max-width-wrapper` }>
        <h2>{getString("TEAM")}</h2>
        <p>{getString("TEAM_ENDORSEMENT")}</p>
      </div>
    </section>
  );
}

export default Team;
