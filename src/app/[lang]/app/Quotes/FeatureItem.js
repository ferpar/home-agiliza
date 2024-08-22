"use client"
import React from "react";
import styles from "../page.module.css";

export default function FeatureItem({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const switchIsOpen = () => setIsOpen(!isOpen);
  return (
    <li className={styles.featureItem}>
      <div className={styles["question"]} onClick={switchIsOpen}>
        <p>{question}</p>
      </div>
      {isOpen && (
        <div className={styles["answer"]}>
          <p>{answer}</p>
        </div>
      )}
    </li>
  );
}
