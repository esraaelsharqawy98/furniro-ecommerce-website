import React from "react";
import styles from "./Features.module.css";
import TrophyIcon from "/images/trophy 1.svg";
import GuaranteeIcon from "/images/guarantee.svg";
import ShippingIcon from "/images/shipping.svg";
import SupportIcon from "/images/customer-support.svg";

const featureData = [
  {
    icon: TrophyIcon,
    title: "High Quality",
    description: "Crafted from top materials",
    alt: "trophy icon"
  },
  {
    icon: GuaranteeIcon,
    title: "Warranty Protection",
    description: "Over 2 years",
    alt: "guarantee icon"
  },
  {
    icon: ShippingIcon,
    title: "Free Shipping",
    description: "Order over $150",
    alt: "shipping icon"
  },
  {
    icon: SupportIcon,
    title: "24 / 7 Support",
    description: "Dedicated support",
    alt: "support icon"
  }
];

const Features = () => {
  return (
    <section className={styles.feature}>
      <div className={styles.container}>
        {featureData.map((feature) => (
          <article key={feature.title} className={styles.featureItem}>
            <img src={feature.icon} alt={feature.alt} />
            <div className={styles.featureText}>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
