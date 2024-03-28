import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Intuitive Editing",
    Svg: require("@site/static/img/img1.svg").default,
    description: (
      <>No engineering degree needed. Dhub is designed to be easy to use.</>
    ),
  },
  {
    title: "Collaborative by Default",
    Svg: require("@site/static/img/img2.svg").default,
    description: <>Real-time WYSIWYG editing .</>,
  },
  {
    title: "GitHub-aware",
    Svg: require("@site/static/img/img3.svg").default,
    description: (
      <>
        In sync with your GitHub repository. Push and pull changes by clicking a
        button.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
