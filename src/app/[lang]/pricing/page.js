"use client";
import React from "react";
import styles from "./page.module.css";
import { Button, Switch } from "@radix-ui/themes";
import Script from "next/script";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function isValidUUID(uuid) {
  const regex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89ABab][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
  return regex.test(uuid);
}

export default function Pricing() {
  const searchParams = useSearchParams();
  const uuid = searchParams.get("uuid");
  const [monthly, setMonthly] = React.useState(true);
  const [cbInstance, setCbInstance] = React.useState(null);
  const features = {
    cotizaciones: [
      "Cálculo de margen y ROI para Autónomos con recargo de equivalencia",
      "Cálculo de margen y ROI para Empresas",
      "Cálculo de tarifas de amazon exactas",
      "Cotizaciones ilimitadas",
      "Cálculo de costes en funcion de cantidades",
      "Cálculo de costes en funcion de incoterms",
      "Productos ilimitados",
      "Conversion de divisa automática entre USD y EUR",
    ],
  };
  const coupons = {
    lanzamiento: {
      name: [
        "Oferta de Lanzamiento",
        "(para toda la vida de la suscripción, contratando ahora)",
      ],
      coupons: {
        cot_mens: {
          code: "AGILIZA_LANZAMIENTO",
          amount: 3,
        },
      },
    },
  };
  const auto_coupon = coupons.lanzamiento;
  const plans = {
    monthly: [
      {
        name: "Cotizaciones Mensual",
        price: 12.7,
        data_cb_item: "Cotizaciones-EUR-Monthly",
        discount: {
          enabled: Boolean(auto_coupon),
          name: auto_coupon.name,
          code: auto_coupon.coupons.cot_mens.code,
          amount: auto_coupon.coupons.cot_mens.amount,
        },
        highlight: true,
        base_features: [],
        features: features.cotizaciones,
      },
    ],
    annual: null,
  };

  const handleLoad = () => {
    try {
      window.Chargebee.getInstance();
    } catch (e) {
      // Initialize Chargebee in case it hasn't been initialized yet
      window.Chargebee.init({ site: "agilizaseller-test" });
    }
    setCbInstance(window.Chargebee.getInstance());
  };

  const handleOrder = (plan) => {
    try {
      let cart = cbInstance.getCart();
      let product = cbInstance.initializeProduct(plan.data_cb_item);
      product.isItemsModel = true;
      product.setPlanQuantity(1);
      product.addCoupon(plan.discount.code);
      cart.replaceProduct(product);
      const customer = { cf_agiliza_id: uuid };
      cart.setCustomer(customer);
      cart.proceedToCheckout();
    } catch (e) {
      console.error(e);
      window.alert(
        "Ha ocurrido un error al procesar tu pedido. Por favor, inténtalo de nuevo más tarde o ponte en contacto con hola@agilizaseller.com",
      );
    }
  };

  return (
    <main className={styles.main}>
      <Script
        onLoad={handleLoad}
        src="https://js.chargebee.com/v2/chargebee.js"
        data-cb-site="agilizaseller-test"
      ></Script>
      <div className={styles.pricing_header}>
        {plans.annual && (
          <>
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
          </>
        )}
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
              <div className={styles.discount}>
                {plan.discount.name.map((line, idx) =>
                  idx === 0 ? (
                    <div key={idx}>
                      <span key={idx}>{line}</span>
                    </div>
                  ) : (
                    <p key={idx}>{line}</p>
                  ),
                )}
              </div>
            )}
            <div
              className={styles.price_and_discounted + " " + styles.discount}
            >
              {plan.discount.enabled && (
                <div
                  className={
                    styles.normal_price_when_discounted +
                    " " +
                    styles.permonth_strike
                  }
                >
                  {plan.price}€
                  <span className={styles.perMonth}>/mes + IVA</span>
                </div>
              )}
              <div className={styles.price}>
                {plan.price - plan.discount.amount}€
                <span className={styles.perMonth}>/mes + IVA</span>
              </div>
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
            {isValidUUID(uuid) ? (
              <Button
                className={styles.button}
                size="5"
                onClick={() => {
                  handleOrder(plan);
                }}
              >
                Contratar
              </Button>
            ) : (
              <Link href="https://app.agilizaseller.com/register">
                <Button className={styles.button} size="5">
                  Empezar Prueba Gratuita (3 días)
                </Button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
