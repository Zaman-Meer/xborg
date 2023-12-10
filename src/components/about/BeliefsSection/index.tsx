import Image from "next/image";

import Styles from "./beliefsSection.module.scss";

const CardData = [
  {
    icon: "icon-1.svg",
    title: "The community is our backbone",
    description:
      "The strength of our community make all the difference. Our technologies are governed by players.",
  },
  {
    icon: "icon-2.svg",
    title: "Players deserve to be empowered",
    description:
      "We believe players deserve to own, govern and earn because without players, gaming would not exist.",
  },
  {
    icon: "icon-3.svg",
    title: "Technology is the solution",
    description:
      "We a re committed to developing transparent technologies that even the playing fi eld for players.",
  },
];

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
