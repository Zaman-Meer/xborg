import img from "next/image";
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
            <img src="/assets/images/aboutPage/20.png" alt="" />
            <p>Example* Esports team already using platform</p>
          </div>
          <div className={Styles.card}>
            <p>more than</p>
            <img src="/assets/images/aboutPage/400k.png" alt="" />
            <p>Example* Credentials added to our website</p>
          </div>

          <div className={Styles.card}>
            <p>more than</p>
            <img src="/assets/images/aboutPage/1m.png" alt="" />
            <p>Example* Users registered and using our website</p>
          </div>
          <img
            src="/assets/images/aboutPage/spheres2.png"
            alt=""
            width={45}
            height={45}
            className={Styles.layoutObject1}
          />
          <img
            src="/assets/images/aboutPage/spheres2.png"
            alt=""
            width={45}
            height={45}
            className={Styles.layoutObject2}
          />
          <img
            src="/assets/images/aboutPage/spheres2.png"
            alt=""
            width={25}
            height={25}
            className={Styles.layoutObject3}
          />
          <img
            src="/assets/images/aboutPage/spheres2.png"
            alt=""
            width={45}
            height={45}
            className={Styles.layoutObject4}
          />
          <img
            src="/assets/images/aboutPage/spheres2.png"
            alt=""
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
