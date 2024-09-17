"use client";
import Image from "next/image";
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
      <div className={`${styles.moduleGrid} ${selectedModule === null && styles.unselected}`}>
        <Card
          variant="ghost"
          className={`${styles.moduleCard} ${selectedModule === "quotes" && styles.selected}`}
          onClick={() => handleModuleSelection("quotes")}
        >
          <h3>{dict["QUOTES_MODULE"]}</h3>
          <div className={styles.imgWrapper}>
            <Image
              src="/assets/quotes_S.jpg"
              alt={dict["QUOTES_MODULE"]}
              width={200}
              height={200}
              priority
            />
          </div>
        </Card>
        <Card
          variant="ghost"
          className={`${styles.moduleCard} ${selectedModule === "restock" && styles.selected}`}
          onClick={() => handleModuleSelection("restock")}
        >
          <h3>{dict["RESTOCK_MODULE"]}</h3>
          <div className={styles.imgWrapper}>
            <Image
              src="/assets/CFRestock_S.jpg"
              alt={dict["QUOTES_MODULE"]}
              width={200}
              height={200}
              priority
            />
          </div>
        </Card>
      </div>
      {selectedModule === "quotes" && <QuotesModule dict={dict} />}
      {selectedModule === "restock" && <RestockModule dict={dict} />}
    </div>
  );
}
