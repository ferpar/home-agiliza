"use client";
import React from "react";
import styles from "./page.module.css";
import { Button, Switch } from "@radix-ui/themes";

export default function Pricing() {
  const [monthly, setMonthly] = React.useState(false);
  const plans = [
    {
      name: "Autonomo",
      price: {
        base: 19,
        discounted: 15,
      },
      price_annual: {
        base: 15,
        discounted: 12,
      },
      discounted: true,
      discount_name: "Oferta de Lanzamiento",
      highlight: false,
      base_features: [],
      features: [
        "Cálculo de margen y ROI para Autónomos con recargo de equivalencia",
        "Cálculo de tarifas de amazon exactas",
        "3 Productos",
        "Cotizaciones ilimitadas",
        "Conversion de divisa automática entre USD y EUR",
        "Cálculo de costes en funcion de cantidades",
        "Cálculo de costes en funcion de incoterms",
      ],
    },
    {
      name: "Empresa",
      price: {
        base: 45,
        discounted: 36,
      },
      price_annual: {
        base: 36,
        discounted: 29,
      },
      discounted: true,
      discount_name: "Oferta de Lanzamiento",
      highlight: true,
      base_features: ["Todo lo que incluye el plan de Autónomos"],
      features: [
        "Cálculo de margen y ROI para Empresas",
        "Productos ilimitados",
        "Conversion automática entre 20 divisas",
      ],
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.pricing_header}>
        <span className={styles.label}>Anual</span>
        <span className={styles.switch_container}>
          <Switch
            className={styles.switch}
            onCheckedChange={() => {
              setMonthly(!monthly);
            }}
            checked={monthly}
          />
        </span>
        <span className={styles.label}>Mensual</span>
      </div>
      <div className={styles.pricing_container}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={
              plan.highlight
                ? `${styles["pricing_tier"]} ${styles["highlighted"]}`
                : styles.pricing_tier
            }
          >
            <h1>{plan.name}</h1>
            {plan.discounted && (
              <div className={styles.discount}>{plan.discount_name}</div>
            )}
            <div
              className={styles.price_and_discounted + " " + styles.discount}
            >
              {plan.discounted && (
                <span
                  className={
                    styles.normal_price_when_discounted +
                    " " +
                    styles.permonth_strike
                  }
                >
                  {monthly ? plan.price.base : plan.price_annual.base}€
                  <span className={styles.perMonth}>/mes</span>
                </span>
              )}
              <span className={styles.price}>
                {monthly
                  ? plan.discounted
                    ? plan.price.discounted
                    : plan.price.base
                  : plan.discounted
                    ? plan.price_annual.discounted
                    : plan.price_annual.base}
                €<span className={styles.perMonth}>/mes</span>
              </span>
            </div>
            <div className={styles.perMonth}>
              {monthly ? "(facturado mensualmente)" : "(facturado anualmente)"}
            </div>
            {plan.base_features.length > 0 && (
              <>
                <ul className={styles.base_features}>
                  {plan.base_features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className={styles.plus_symbol}>+</div>
              </>
            )}
            <ul className={styles.features}>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <Button className={styles.button} size="5">
              Empezar
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
}
