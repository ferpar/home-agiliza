"use client";
import { RadioCards } from "@radix-ui/themes";
import QuotesModule from "./Quotes/QuotesModule";
import React from "react";
import styles from "./page.module.css";
export default function AppModules({ dict }) {
  const [selectedModule, setSelectedModule] = React.useState('quotes'); // null, 'quotes', 'restock'
  return (
    <div className={styles.modules}>
      <div style={{ paddingBottom: "2rem" }}>
        <RadioCards.Root
          onValueChange={(value) => {
            setSelectedModule(value);
          }}
        >
          <RadioCards.Item value="quotes" style={{ fontWeight: "700" }}>
            {dict["QUOTES_MODULE"]}
          </RadioCards.Item>
          <RadioCards.Item value="restock" style={{ fontWeight: "700" }}>
            {dict["RESTOCK_MODULE"]}
          </RadioCards.Item>
        </RadioCards.Root>
      </div>
      {selectedModule === "quotes" && <QuotesModule dict={dict} />}
    </div>
  );
}
