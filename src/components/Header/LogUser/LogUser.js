"use client";
import React from "react"
import Link from "next/link";
import styles from "./LogUser.module.css";
import { Button } from "@radix-ui/themes";

export default function LogUser() {
  const [clicked, setClicked] = React.useState(false);
  return (
    <div className={styles.wrapper}>
      <Link href="https://agilizaSeller.com">
        <Button style={{ 
          fontFamily: "var(--font-montserrat)",
          fontSize: "1.2rem",
          cursor: "pointer",
          }}
          onClick={() => setClicked(true)}
          >
          {clicked ? "Cargando..." : "Acceso a Beta!"}
        </Button>
      </Link>
    </div>
  );2
}
