import styles from "./page.module.css";
import Modules from "./Modules";
import { getDictionary } from "../dictionaries";

export default function App({ params: { lang } }) {
  const dict = getDictionary(lang);

  return (
    <main className={`${styles.mainContent} ${styles.blueBg}`}>
      <h2 style={{marginBottom: "1rem"}}>¿Para que sirve?</h2>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <p>Nuestro objetivo es hacer que vendas más trabajando menos</p>
        <p>¿Cómo?</p>
      </div>
      <Modules dict={dict} />
    </main>
  );
}
