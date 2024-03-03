import { getString } from "../../helpers/i18n";
import styles from "./page.module.css";

export const metadata = {
  title: "Política de Privacidad | Centro León Hebreo",
  description: "Política de Privacidad del Centro León Hebreo",
};

export default function Advice() {

  return (
    <main className={styles["main"] + " " + "max-width-wrapper"}>
      <h1>{getString("PRIVACY_TITLE")}</h1>
      <div className={`${styles["wrapper"]}`}>
        <ol>
            <li >
              <h2>{getString("PRIVACY_HEADING_1")}</h2>
              <p>{getString("PRIVACY_P1")}</p>
            </li>
            <li >
              <h2>{getString("PRIVACY_HEADING_2")}</h2>
              <p>{getString("PRIVACY_P3")}</p>
              <ul>
                <li>{getString("PRIVACY_P2_LI1")}</li>
                <li>{getString("PRIVACY_P2_LI2")}</li>
                <li>{getString("PRIVACY_P2_LI3")}</li>
              </ul>
            </li>
            <li >
              <h2>{getString("PRIVACY_HEADING_3")}</h2>
              <p>{getString("PRIVACY_P3")}</p>
              <ul>
                <li>{getString("PRIVACY_P3_LI1")}</li>
                <li>{getString("PRIVACY_P3_LI2")}</li>
                <li>{getString("PRIVACY_P3_LI3")}</li>
              </ul>
            </li>
            <li >
              <h2>{getString("PRIVACY_HEADING_4")}</h2>
              <p>{getString("PRIVACY_P4")}</p>
            </li>
            <li >
              <h2>{getString("PRIVACY_HEADING_5")}</h2>
              <p>{getString("PRIVACY_P5")}</p>
            </li>
            <li >
              <h2>{getString("PRIVACY_HEADING_6")}</h2>
              <p>{getString("PRIVACY_P6")}</p>
            </li>
            <li >
              <h2>{getString("PRIVACY_HEADING_7")}</h2>
              <p>{getString("PRIVACY_P7")}</p>
            </li>
            <li >
              <h2>{getString("PRIVACY_HEADING_8")}</h2>
              <p>{getString("PRIVACY_P8")}</p>
            </li>
            <li >
              <h2>{getString("PRIVACY_HEADING_9")}</h2>
              <p>{getString("PRIVACY_P9")}</p>
            </li>
        </ol>
      </div>
    </main>
  );
}


 