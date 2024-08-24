"use client";
import React from "react";
import styles from "../page.module.css";
// import chevron icon form radix ui
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import FeatureVideo from "../FeatureVideo";

export default function FeatureItem({ question, answer, video, image }) {
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
            {video && <FeatureVideo video={video} />}
            {image && (
              <div
                style={{
                  marginTop: "1rem",
                  position: "relative",
                  height: "200px",
                }}
              >
                <Image
                  fill
                  src={image}
                  alt={question}
                  style={{
                    borderRadius: "5px",
                    overflow: "hidden",
                    objectFit: "cover",
                  }}
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
          onClick={switchIsOpen}
        >
          <ChevronDownIcon height="2rem" width="2rem" />
        </div>
      </li>
  );
}
