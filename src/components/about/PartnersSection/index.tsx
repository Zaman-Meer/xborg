import Image from "next/image";
import Styles from "./partnersSection.module.scss";

const PartnersSection = () => {
  return (
    <div className={Styles.container}>
      <h1>Our partners</h1>
      <div className={Styles.logContainer}>
        <Image
          alt="swiss-borg"
          src="/assets/vectors/partnersBrandsIcons/swiss-borg.svg"
          width={120}
          height={40}
        />
        <Image
          alt="polygon"
          src="/assets/vectors/partnersBrandsIcons/polygon.svg"
          width={120}
          height={40}
        />
        <Image
          alt="myria"
          src="/assets/vectors/partnersBrandsIcons/myria.svg"
          width={120}
          height={40}
        />
        <Image
          alt="brave"
          src="/assets/vectors/partnersBrandsIcons/brave.svg"
          width={120}
          height={40}
        />
        <Image
          alt="immutable"
          src="/assets/vectors/partnersBrandsIcons/immutable.svg"
          width={120}
          height={40}
        />
      </div>
      <div className={Styles.logContainer}>
        <Image
          alt="heroic"
          src="/assets/vectors/partnersBrandsIcons/heroic.svg"
          width={120}
          height={40}
        />
        <Image
          alt="team-liquid"
          src="/assets/vectors/partnersBrandsIcons/team-liquid.svg"
          width={120}
          height={40}
        />
        <Image
          alt="tezos"
          src="/assets/vectors/partnersBrandsIcons/tezos.svg"
          width={120}
          height={40}
        />
        <Image
          alt="plr"
          src="/assets/vectors/partnersBrandsIcons/plr.svg"
          width={120}
          height={40}
        />
        <Image
          alt="ultra"
          src="/assets/vectors/partnersBrandsIcons/ultra.svg"
          width={120}
          height={40}
        />
        <Image
          alt="mantle"
          src="/assets/vectors/partnersBrandsIcons/mantle.svg"
          width={120}
          height={40}
        />
        <Image
          alt="zilliqa"
          src="/assets/vectors/partnersBrandsIcons/zilliqa.svg"
          width={120}
          height={40}
          layout=""
        />
      </div>
      <div className={Styles.bottomLogoContainer}>
        <p>Business angels from</p>
        <Image
          alt="ethereum"
          src="/assets/vectors/partnersBrandsIcons/ethereum.svg"
          width={120}
          height={40}
          layout=""
        />

        <Image
          alt="esl"
          src="/assets/vectors/partnersBrandsIcons/esl.svg"
          width={120}
          height={40}
          layout=""
        />
        <Image
          alt="shield"
          src="/assets/vectors/partnersBrandsIcons/shield.svg"
          width={120}
          height={40}
          layout=""
        />
        <Image
          alt="aave"
          src="/assets/vectors/partnersBrandsIcons/aave.svg"
          width={120}
          height={40}
          layout=""
        />
        <Image
          alt="faceit"
          src="/assets/vectors/partnersBrandsIcons/faceit.svg"
          width={120}
          height={40}
          layout=""
        />
      </div>
    </div>
  );
};

export default PartnersSection;
