import members from "./members.js";
import styles from "./page.module.css";
import TeamCard from "../../components/TeamCard";

export const metadata = {
  title: "Equipo | Centro León Hebreo",
  description: "Equipo del Centro León Hebreo",
};

export default function Team() {
  return (
    <main className={styles["team"]}>
      <h2 className={styles["title"]}>Nuestro Equipo</h2>
      <div className={styles["container"]}>
        {members.map((member, index) => (
          <TeamCard member={member} key={index} />
        ))}
      </div>
    </main>
  );
}
