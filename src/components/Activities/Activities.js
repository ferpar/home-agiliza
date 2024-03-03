import styles from "./Activities.module.css";
import { getString } from "../../helpers/i18n";

function Activities() {
  return (
      <section className={styles["activities"]}>
        <div className='max-width-wrapper'>
            <p>{getString("ACTIVITIES")}</p>
        </div>
      </section>
  );
}

export default Activities;