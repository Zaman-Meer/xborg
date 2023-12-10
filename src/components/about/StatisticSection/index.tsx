import Image from "next/image";
import Styles from "./statisticSection.module.scss";

const StatisticSection = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainer}>
        <h1>The fastest growing GameFi ecosystem</h1>
        <p className={Styles.details}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis
          viverra lectus. In aliquam bibendum varius. Suspendisse et justo
          finibus, feugiat nunc ut, lobortis metus
        </p>
        <div className={Styles.cardContainer}>
          <div className={Styles.card}>
            <p>more than</p>
            <Image
              src="/assets/images/aboutPage/20.png"
              alt="20"
              width={150}
              height={80}
            />
            <p>Example* Esports team already using platform</p>
          </div>
          <div className={Styles.card}>
            <p>more than</p>
            <Image
              src="/assets/images/aboutPage/400k.png"
              alt="400k"
              width={200}
              height={80}
            />
            <p>Example* Credentials added to our website</p>
          </div>

          <div className={Styles.card}>
            <p>more than</p>
            <Image
              src="/assets/images/aboutPage/1m.png"
              alt="1m"
              width={150}
              height={80}
            />
            <p>Example* Users registered and using our website</p>
          </div>
          <Image
            src="/assets/images/aboutPage/Spheres2.png"
            alt="object1"
            width={45}
            height={45}
            className={Styles.layoutObject1}
          />
          <Image
            src="/assets/images/aboutPage/Spheres2.png"
            alt="object2"
            width={45}
            height={45}
            className={Styles.layoutObject2}
          />
          <Image
            src="/assets/images/aboutPage/Spheres2.png"
            alt="object3"
            width={25}
            height={25}
            className={Styles.layoutObject3}
          />
          <Image
            src="/assets/images/aboutPage/Spheres2.png"
            alt="object4"
            width={45}
            height={45}
            className={Styles.layoutObject4}
          />
          <Image
            src="/assets/images/aboutPage/Spheres2.png"
            alt="object5"
            width={45}
            height={45}
            className={Styles.layoutObject5}
          />
        </div>
      </div>
    </div>
  );
};

export default StatisticSection;
