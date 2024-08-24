import styles from "../page.module.css";
import FeatureItem from "./FeatureItem";

export default function QuotesModule({ dict }) {
  const features = [
    {
      question:
        dict["QUOTES_F1_Q"],
      answer:
        dict["QUOTES_F1_A"],
      video: 
      "/assets/MissingDataWarning.mp4"
    },
    {
      question:
        dict["QUOTES_F2_Q"],
      answer:
        dict["QUOTES_F2_A"],
      image: "/assets/OrderedByROI.gif"
    },
    {
      question:
        dict["QUOTES_F3_Q"],
      answer:
        dict["QUOTES_F3_A"],
      video: "/assets/MissingDataWarning.mp4"
    },
    {
      question:
        dict["QUOTES_F4_Q"],
      answer:
        dict["QUOTES_F4_A"],
      image: "/assets/ExchangeRate.gif"
    },
    {
      question:
        dict["QUOTES_F5_Q"],
      answer:
        dict["QUOTES_F5_A"],
      video: "/assets/FeesCalculation.mp4"
    },
    {
      question:
        dict["QUOTES_F6_Q"],
      answer:
        dict["QUOTES_F6_A"],
      video: "/assets/FOBEXW.mp4"
    },
    {
      question:
        dict["QUOTES_F7_Q"],
      answer:
        dict["QUOTES_F7_A"],
    },
  ];
  return (
    <section>
      <h3>Módulo de Gestión de Cotizaciones</h3>
      <div>
        <p>
          Eres un seller de Amazon, y lo que más disfrutas es pedir cotizaciones
          para un producto en Alibaba... ...ahhhh, que no?
        </p>
        <div style={{textAlign: "center", paddingTop: "1rem"}}>
        <h3>¿Qué es lo que pasa?</h3>
        </div>
        <ul className={styles.quotesGrid}>
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </ul>
      </div>
    </section>
  );
}
