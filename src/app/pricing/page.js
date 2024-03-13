"use client";
import React from "react";
import styles from "./page.module.css";
import { Button, Switch } from "@radix-ui/themes";
import Script from "next/script";

export default function Pricing() {
  const [monthly, setMonthly] = React.useState(false);
  const [cbInstance, setCbInstance] = React.useState(null);
  const features = {
    autonomos: [
      "Cálculo de margen y ROI para Autónomos con recargo de equivalencia",
      "Cálculo de tarifas de amazon exactas",
      "3 Productos",
      "Cotizaciones ilimitadas",
      "Conversion de divisa automática entre USD y EUR",
      "Cálculo de costes en funcion de cantidades",
      "Cálculo de costes en funcion de incoterms",
    ],
    empresas: [
      "Cálculo de margen y ROI para Empresas",
      "Productos ilimitados",
      "Conversion automática entre 20 divisas",
    ],
  };
  const coupons = {
    lanzamiento: {
      name: "Oferta de Lanzamiento (para toda la vida, contratando ahora)",
      coupons: {
        aut_mens: {
          code: "AGILIZA_LANZAMIENTO1",
          amount: 4,
        },
        aut_an: {
          code: "AGILIZA_LANZAMIENTO2",
          amount: 3,
        },
        emp_mens: {
          code: "AGILIZA_LANZAMIENTO3",
          amount: 9,
        },
        emp_an: {
          code: "AGILIZA_LANZAMIENTO4",
          amount: 7,
        },
      },
    },
  };
  const auto_coupon = coupons.lanzamiento;
  const plans = {
    monthly: [
      {
        name: "Autonomo Mensual",
        price: 19,
        data_cb_item: "Autonomos-EUR-Monthly",
        discount: {
          enabled: Boolean(auto_coupon),
          name: auto_coupon.name,
          code: auto_coupon.coupons.aut_mens.code,
          amount: auto_coupon.coupons.aut_mens.amount,
        },
        highlight: false,
        base_features: [],
        features: features.autonomos,
      },
      {
        name: "Empresa Mensual",
        price: 45,
        data_cb_item: "Empresas-EUR-Monthly",
        discount: {
          enabled: Boolean(auto_coupon),
          name: auto_coupon.name,
          code: auto_coupon.coupons.emp_mens.code,
          amount: auto_coupon.coupons.emp_mens.amount,
        },
        highlight: true,
        base_features: ["Todo lo que incluye el plan de Autónomos"],
        features: features.empresas,
      },
    ],
    annual: [
      {
        name: "Autonomo Anual",
        price: 15,
        data_cb_item: "Autonomos-EUR-Yearly",
        discount: {
          enabled: Boolean(auto_coupon),
          name: auto_coupon.name,
          code: auto_coupon.coupons.aut_an.code,
          amount: auto_coupon.coupons.aut_an.amount,
        },
        highlight: false,
        base_features: [],
        features: features.autonomos,
      },
      {
        name: "Empresa Anual",
        price: 36,
        data_cb_item: "Empresas-EUR-Yearly",
        discount: {
          enabled: Boolean(auto_coupon),
          name: auto_coupon.name,
          code: auto_coupon.coupons.emp_an.code,
          amount: auto_coupon.coupons.emp_an.amount,
        },
        highlight: true,
        base_features: ["Todo lo que incluye el plan de Autónomos"],
        features: features.empresas,
      },
    ],
  };

  const handleLoad = () => {
    setCbInstance(window.Chargebee.getInstance());
  };

  const handleOrder = (plan) => {
    let cart = cbInstance.getCart();
    let product = cbInstance.initializeProduct(plan.data_cb_item);
    product.isItemsModel = true;
    product.setPlanQuantity(1);
    product.addCoupon(plan.discount.code);
    cart.replaceProduct(product);
    cart.proceedToCheckout();
  };

  return (
    <main className={styles.main}>
      <Script
        onLoad={handleLoad}
        src="https://js.chargebee.com/v2/chargebee.js"
        data-cb-site="agilizaseller-test"
      ></Script>
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
        {plans[monthly ? "monthly" : "annual"].map((plan) => (
          <div
            key={plan.name}
            className={
              plan.highlight
                ? `${styles["pricing_tier"]} ${styles["highlighted"]}`
                : styles.pricing_tier
            }
          >
            <h1>{plan.name}</h1>
            {plan.discount.enabled && (
              <div className={styles.discount}>{plan.discount.name}</div>
            )}
            <div
              className={styles.price_and_discounted + " " + styles.discount}
            >
              {plan.discount.enabled && (
                <span
                  className={
                    styles.normal_price_when_discounted +
                    " " +
                    styles.permonth_strike
                  }
                >
                  {plan.price}€
                  <span className={styles.perMonth}>/mes + IVA</span>
                </span>
              )}
              <span className={styles.price}>
                {plan.price - plan.discount.amount}€
                <span className={styles.perMonth}>/mes + IVA</span>
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

            <Button
              className={styles.button}
              size="5"
              onClick={() => {
                handleOrder(plan);
              }}
            >
              Empezar
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
}
