import styles from "./page.module.css";
import { getDictionary } from "../dictionaries";

export const metadata = {
  title: "Terminos y Condiciones | Agiliza Seller",
  description: "Terminos y Condiciones de Agiliza Seller",
};

export default async function Advice({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const articleNums = Array.from({ length: 12 }, (_, i) => i + 1);
  const articles = articleNums.map((num) => {
    return {
      title: dict[`LEGAL_HEADING_${num}`],
      content: dict[`LEGAL_P${num}`],
    };
  });

  return (
    <main className={styles["main"] + " " + "legal-terms-wrapper"}>
      <h1>{dict["LEGAL_TITLE"]}</h1>
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
