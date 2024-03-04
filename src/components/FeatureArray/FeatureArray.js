import {
  RowsIcon,
  SketchLogoIcon,
  UpdateIcon,
  Crosshair2Icon,
  GlobeIcon,
  CounterClockwiseClockIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import styles from "./FeatureArray.module.css";

const features = [
  {
    feature: "Gestionar múltiples ofertas, sabiendo qué falta en cada una.",
    icon: RowsIcon,
  },
  {
    feature:
      "Introducir costes en cualquier moneda. Haciéndose los cálculos correctamente.",
    icon: SketchLogoIcon,
  },
  {
    feature:
      "Calcular tarifas de Amazon automáticamente. Sin errores por olvido de datos.",
    icon: UpdateIcon,
  },
  {
    feature:
      "Conocer el margen de beneficio, así como el ROI tanto para la compra de test como para mayores cantidades.",
    icon: Crosshair2Icon,
  },
  {
    feature:
      "Obtener el resultado final para distintos Incoterms. Sabiendo el coste total de la mercancía.",
    icon: GlobeIcon,
  },
  {
    feature: "Ver de manera ágil el resultado para distintos PVPs. ",
    icon: CounterClockwiseClockIcon,
  },
  {
    feature:
      "Saber de un vistazo cuál es el proveedor que te está dando la mejor oferta, teniendo en cuenta todos los factores.",
    icon: RocketIcon,
  },
];

export default function FeatureArray() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.array}>
        {features.map((feature, index) => (
          <div key={index}>
            {feature.icon && <feature.icon />}
            {feature.feature && <p>{feature.feature}</p>}
            </div>
        ))}
      </div>
    </section>
  );
}
