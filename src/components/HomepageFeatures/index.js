import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"

const FeatureList = [
  {
    title: "Tailwind Components and UI Elements",
    Svg: require("@site/static/images/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Free components and free templates, based on Tailwind CSS, compatible with React, VueJS and Angular
        applications.
      </>
    ),
  },
  {
    title: "Building Blocks",
    Svg: require("@site/static/images/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        The right kind of building blocks to take your company to the next level. <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Developer Tools",
    Svg: require("@site/static/images/undraw_docusaurus_react.svg").default,
    description: <>Tools to help grow your application and keep it up-to-date.</>,
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
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
  )
}
