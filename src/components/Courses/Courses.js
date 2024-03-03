import styles from "./Courses.module.css";
import { getString } from "../../helpers/i18n";
import FadeIn from "../FadeIn";

const courses = [
  {
    title: "LIGHTHOUSE_CARD_1",
    description: "LIGHTHOUSE_CARD_2",
    description2: "LIGHTHOUSE_CARD_3",
    image: "/images/lighthouse2.webp",
  },
  {
    title: "THEORY_CARD_1",
    description: "THEORY_CARD_2",
    description2: "THEORY_CARD_3",
    image: "/images/manuscript.webp",
  },
  {
    title: "PRACTICE_CARD_1",
    description: "PRACTICE_CARD_2",
    description2: "PRACTICE_CARD_3",
    image: "/images/grandHall.webp",
  },
];

export default function CourseList() {
  return (
    <section className={styles["courses"]}>
      <h1>{getString("TITLE")}</h1>
      <ul>
        {courses.map((course, idx) => (
          <li key={idx}>
            <div className={styles["img-wrapper"]}>
              <FadeIn extend={2}>
                <img src={course.image} alt="lighthouse" />
              </FadeIn>
            </div>
            <div className={styles["content"]}>
              <h3>{getString(course.title)}</h3>
              <p>{getString(course.description)}</p>
              <p>{getString(course.description2)}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
