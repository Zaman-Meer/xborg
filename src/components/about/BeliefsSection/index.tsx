import Image from "next/image";

import Styles from "./beliefsSection.module.scss";
import { CardData } from "@/common/constant";

const BeliefsSection = () => {
  return (
    <div className={Styles.container}>
      <Image
        src="/assets/images/aboutPage/spheres.png"
        width={80}
        height={108}
        alt="layout-image"
        className={Styles.layoutImage}
      />

      <div className={Styles.content}>
        <h1>Our beliefs</h1>
        <div className={Styles.cardsContainer}>
          {CardData?.map((cardData, index: number) => (
            <div className={Styles.card} key={index}>
              <Image
                src={`/assets/vectors/common/${cardData?.icon}`}
                alt="icon"
                width={78}
                height={98}
              />
              <div className={Styles.content}>
                <h3>{cardData?.title}</h3>
                <p>{cardData?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeliefsSection;
