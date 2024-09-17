"use client";
import React from "react";
import styles from "../../page.module.css";
// import chevron icon form radix ui
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import FeatureVideo from "../../FeatureVideo";

export default function FeatureItem({ question, answer, video, image }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const switchIsOpen = () => setIsOpen(!isOpen);
  return (
      <li className={styles.featureItem} onClick={switchIsOpen}>
        <div className={styles["question"]} >
          <p>{question}</p>
        </div>
        {isOpen && (
          <div className={styles["answer"]}>
            <p>{answer}</p>
            {video && <FeatureVideo video={video} />}
            {image && (
              <div
                className={styles["imageWrapper"]}
              >
                <Image
                  fill
                  src={image}
                  alt={question}
                  className={styles["featureImage"]}
                />
              </div>
            )}
          </div>
        )}
        <div
          className={
            isOpen
              ? `${styles["chevron"]} ${styles["chevronOpen"]}`
              : styles["chevron"]
          }
        >
          <ChevronDownIcon height="2rem" width="2rem" />
        </div>
      </li>
  );
}
