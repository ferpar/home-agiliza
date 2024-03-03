"use client";
import React from "react";
import styles from "./TeamCard.module.css";

export default function TeamCard({ member }) {
  const [seeMore, setSeeMore] = React.useState(false);
  return (
    <div className={styles["card"]} onClick={() => setSeeMore(!seeMore)}>
      <div>
        <div className={styles["card-img"]}>
          <img src={member.img} alt={member.name} />
        </div>
        <div className={styles["card-info"]}>
          <h3>
            {member.name} {member.surname}
          </h3>
          <h4>
            {member.role1} {member.role2}
          </h4>
          <hr />
          <p>{member.tagline}</p>
        </div>
        <div
          className={
            `${styles["card-bio"]} ` + `${seeMore ? styles["see-more"] : ""}`
          }
        >
          <p>{member.bio}</p>
        </div>
      </div>
      <button className={styles["card-button"]}>
        {seeMore ? "Ocultar" : "Saber más"}
      </button>
    </div>
  );
}
