import styles from "./page.module.css";
import Highlighted from "@/components/Highlighted";
import CourseList from "@/components/Courses";

export const metadata = {
  title: "Cursos | Centro León Hebreo",
  description: "Oferta de Cursos del Centro León Hebreo",
};

export default function Courses() {
  return (
    <main className={styles.main}>
      <Highlighted />
      <CourseList /> 
    </main>
  );
}
