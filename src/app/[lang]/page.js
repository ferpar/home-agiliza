import styles from "./page.module.css";
import Hero from "../../components/Hero";
import About from "../../components/About";

export const metadata = {
  title: "Agiliza Seller",
  description: "Vende más, trabaja menos",
};

import { getDictionary } from './dictionaries'

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang)
  return (
    <main className={styles.main}>
      <Hero dict={dict} lang={lang}/>
      <About dict={dict} />
    </main>
  );
}
