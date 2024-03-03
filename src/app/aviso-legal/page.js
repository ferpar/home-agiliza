import { getString } from "../../helpers/i18n";
import styles from "./page.module.css";

export const metadata = {
  title: "Aviso Legal | Centro León Hebreo",
  description: "Aviso Legal del Centro León Hebreo",
};

export default function Advice() {
  const articleNums = Array.from({ length: 7 }, (_, i) => i + 1);
  const articles = articleNums.map((num) => {
    return {
      title: getString(`LEGAL_HEADING_${num}`),
      content: getString(`LEGAL_P${num}`),
    };
  });

  return (
    <main className={styles["main"] + " " + "max-width-wrapper"}>
      <h1>{getString("LEGAL_TITLE")}</h1>
      <div className={`${styles["wrapper"]}`}>
        <ol>
          {articles.map((article, idx) => (
            <li key={idx}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
