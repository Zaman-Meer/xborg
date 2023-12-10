import Image from "next/image";
import LinkButton from "@/components/common/LinkButton";
import Styles from "./brandDetailsSection.module.scss";

const BrandDetailsSection = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainer}>
        <div className={Styles.titleContainer}>
          <div className={Styles.titleWrapper1}>
            <Image
              src="/assets/vectors/common/swiss-borg-icon.svg"
              width={69}
              height={69}
              alt="brand-logo"
            />
            <h1>SwissBorg</h1>
          </div>
          <h1>Spin-Off</h1>
        </div>
        <div className={Styles.detailsContainer}>
          <p>
            XBorg is the gaming spin-off of SwissBorg, a crypto wealth
            management application founded in 2017, with more than 750’000
            verified users and over $1 billion in AUM.
          </p>
          <LinkButton text="Learn more" to="" />
        </div>
      </div>
      <div className={Styles.layoutObject1}>
        <Image
          src="/assets/images/aboutPage/spheres4.png"
          width={57}
          height={57}
          alt="layout-object11"
        />
      </div>
      <div className={Styles.layoutObject2}>
        <Image
          src="/assets/images/aboutPage/spheres4.png"
          width={73}
          height={73}
          alt="layout-object44"
        />
      </div>
      <div className={Styles.layoutObject2}>
        <Image
          src="/assets/images/aboutPage/spheres4.png"
          width={79}
          height={79}
          alt="layout-object33"
        />
      </div>
    </div>
  );
};

export default BrandDetailsSection;
