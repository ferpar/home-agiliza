"use client";
import { RadioCards } from "@radix-ui/themes";
import QuotesModule from "./Quotes/QuotesModule";
import React from "react";
import styles from "./page.module.css";
export default function AppModules({ dict }) {
  const [selectedModule, setSelectedModule] = React.useState(null); // null, 'quotes', 'restock'
  return (
    <div className={styles.modules}>
      <div style={{ paddingBottom: "2rem" }}>
        <RadioCards.Root
          onValueChange={(value) => {
            setSelectedModule(value);
          }}
        >
          <RadioCards.Item value="quotes" style={{ fontWeight: "700" }}>
            Gestión de Cotizaciones
          </RadioCards.Item>
          <RadioCards.Item value="restock" style={{ fontWeight: "700" }}>
            Gestión de Restock
          </RadioCards.Item>
        </RadioCards.Root>
      </div>
      {selectedModule === "quotes" && <QuotesModule dict={dict} />}
    </div>
  );
}
