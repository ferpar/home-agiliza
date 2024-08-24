import styles from "../page.module.css";
import FeatureItem from "./FeatureItem";
import FeatureVideo from "../FeatureVideo";

export default function QuotesModule({ dict }) {
  const features = [
    {
      question:
        "¿Alguna vez los fabricantes no te dan toda la información que pides?",
      answer:
        "Con Agiliza Seller, puedes puedes gestionar de manera muy visual todos los datos que te faltan en cada cotización. Así que no tendrás que estar buscando qué datos te faltan para volver a pedirlos.",
      video: 
      "/assets/MissingDataWarning.mp4"
    },
    {
      question:
        "¿Después de hablar con 10 o más proveedores, es un lio aclararse con todos los datos que te han dado?",
      answer:
        "Compara de manera visual todas las cotizaciones que has recibido, y ve de un vistazo cuál es la mejor opción.",
      image: "/assets/OrderedByROI.gif"
    },
    {
      question:
        "¿Te pones a hacer el calculo de rentabilidad, para darte cuenta que te faltaba un dato y tienes que ir a pedirlo al fabricante?",
      answer:
        "La aplicación te avisa claramente si te falta algún dato para hacer el cálculo de rentabilidad.",
      video: "/assets/MissingDataWarning.mp4"
    },
    {
      question:
        "¿Alguna vez se te ha olvidado hacer el cambio de dólar a euro para los precios del fabricante?",
      answer:
        "La aplicación se encarga del cambio de divisa, actualizado diariamente de forma automatica para que no tengas que calcular na-da.",
      image: "ExchangeRate.gif"
    },
    {
      question:
        "¿A lo mejor te has equivocado alguna vez calculando alguna de las tarifas de Amazon? o quizá te hayas olvidado de actualizar la tarifa logística tras cambiar el packaging?",
      answer:
        "Agiliza Seller calcula las tarifas de referencia, logística y almacenamiento de Amazon sin necesidad de mirar ninguna tabla ni ninguna otra herramienta.",
      vide: "/assets/FeesCalculation.mp4"
    },
    {
      question:
        "¿Has importado EXW, y te has quedado con la duda de si FOB habría sido más rentable?",
      answer:
        "También vas a poder saber con un sólo click, si te conviene más importar FOB o EXW.",
      video: "/assets/FOBEXW.mp4"
    },
    {
      question:
        "¿Estás harto de tanta hoja de excel y sientes que tiene que haber “una forma mejor”?",
      answer:
        "La hay, y es Agiliza Seller. Te permite saber con exactitud, que rentabilidad te dan TODOS tus proveedores para distintos PVP del producto, de un plumazo. Tanto como si tienes 3 proveedores y un producto, como si eres un vendedor establecido con 50 productos y 80 proveedores. Accesible desde cualquier terminal. Y siempre sabrás de un vistazo cual es el proveedor que te da mayor rentabilidad.",
    },
  ];
  return (
    <section>
      <h3>Módulo de Gestión de Cotizaciones</h3>
      <div>
        <p>
          Eres un seller de Amazon, y lo que más disfrutas es pedir cotizaciones
          para un producto en Alibaba...
        </p>
        <p>...ahhhh, que no?</p>
        <p>¿Qué es lo que pasa?</p>
        <ul className={styles.quotesGrid}>
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </ul>
      </div>
    </section>
  );
}
