import styles from "./page.module.css";
import QuotesModule from "./Quotes/QuotesModule";
import { getDictionary } from "../dictionaries";

export default function App({ params: { lang } }) {
  const dict = getDictionary(lang);

  return (
    <main className={`${styles.mainContent}`}>
      <h1 style={{marginBottom: "1rem"}}>¿Para que sirve?</h1>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <p>Nuestro objetivo es hacer que vendas más trabajando menos</p>
        <p>¿Cómo?</p>
      </div>
      <QuotesModule dict={dict} />
    </main>
  );
}
