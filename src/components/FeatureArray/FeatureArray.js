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
import FadeIn from "../FadeIn/FadeIn";

export default function FeatureArray({ dict }) {
  const features = [
    {
      feature: dict["FEATURE_1"],
      icon: RowsIcon,
    },
    {
      feature: dict["FEATURE_2"],
      icon: SketchLogoIcon,
    },
    {
      feature: dict["FEATURE_3"],
      icon: UpdateIcon,
    },
    {
      feature: dict["FEATURE_4"],
      icon: Crosshair2Icon,
    },
    {
      feature: dict["FEATURE_5"],
      icon: GlobeIcon,
    },
    {
      feature: dict["FEATURE_6"],
      icon: CounterClockwiseClockIcon,
    },
    {
      feature: dict["FEATURE_7"],
      icon: RocketIcon,
    },
  ];
  return (
    <section className={styles.wrapper}>
      <div className={styles.array}>
        {features.map((feature, index) => {
          return !feature.feature ? (
            <div></div>
          ) : (
            <FadeIn extend={2} key={index} className={styles.fadeIn}>
              <div className={styles.featureCard} key={index}>
                {feature.icon && <feature.icon height="50px" width="50px" />}
                {feature.feature && <p>{feature.feature}</p>}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
