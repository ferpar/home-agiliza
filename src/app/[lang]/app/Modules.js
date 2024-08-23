"use client";
import { RadioCards, Separator } from "@radix-ui/themes";
import QuotesModule from "./Quotes/QuotesModule";
import React from "react";
export default function AppModules({ dict }) {
  const [selectedModule, setSelectedModule] = React.useState(null); // null, 'quotes', 'restock'
  return (
    <div style={{width: "100%"}}>
      <div style={{paddingBottom: "2rem"}}>
        <RadioCards.Root
          onValueChange={(value) => {
            setSelectedModule(value);
          }}
        >
          <RadioCards.Item value="quotes">
            Gestión de Cotizaciones
          </RadioCards.Item>
          <RadioCards.Item value="restock">Gestión de Restock</RadioCards.Item>
        </RadioCards.Root>
      </div>
      {selectedModule === "quotes" && <QuotesModule dict={dict} />}
    </div>
  );
}
