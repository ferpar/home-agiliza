import styles from "./page.module.css";
import Modules from "./ModuleSelector/Modules";
import { getDictionary } from "../dictionaries";

export default async function App({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <main className={`${styles.mainContent} ${styles.blueBg}`}>
      <h2 className={styles.subtitle}>{dict["APP_ABOUT_TITLE"]}</h2>
      <div className={styles.intro}>
        <p>{dict["APP_ABOUT_INTRO_1"]}</p>
        <p>{dict["APP_ABOUT_INTRO_2"]}</p>
      </div>
      <Modules dict={dict} />
    </main>
  );
}
