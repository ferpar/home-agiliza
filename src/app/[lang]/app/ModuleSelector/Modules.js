"use client";
import { Card } from "@radix-ui/themes";
import QuotesModule from "./Quotes/QuotesModule";
import RestockModule from "./Restock/RestockModule";
import React from "react";
import styles from "./ModuleSelector.module.css";
export default function AppModules({ dict }) {
  const [selectedModule, setSelectedModule] = React.useState(null); // null, 'quotes', 'restock'

  const handleModuleSelection = (module) => {
    if (selectedModule === module) {
      setSelectedModule(null);
    } else {
      setSelectedModule(module);
    }
  };

  return (
    <div className={styles.modules}>
      <div className={styles.moduleGrid}>
        <Card
          variant="ghost"
          className={`${styles.moduleCard} ${selectedModule === "quotes" && styles.selected}`}
          onClick={() => handleModuleSelection("quotes")}
        >
          <h3>{dict["QUOTES_MODULE"]}</h3>
        </Card>
        <Card
          variant="ghost"
          className={`${styles.moduleCard} ${selectedModule === "restock" && styles.selected}`}
          onClick={() => handleModuleSelection("restock")}
        >
          <h3>{dict["RESTOCK_MODULE"]}</h3>
        </Card>
      </div>
      {selectedModule === "quotes" && <QuotesModule dict={dict} />}
      {selectedModule === "restock" && <RestockModule dict={dict} />}
    </div>
  );
}
