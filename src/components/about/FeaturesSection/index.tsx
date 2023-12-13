import LinkButton from "@/components/common/LinkButton";
import Styles from "./featuresSection.module.scss";
import FlashlightCursorWrapper from "@/components/common/FlashlightCursorWrapper";

const FeaturesSection = () => {
  return (
    <div className={Styles.container}>
      <h1>Unlocking a new era of play</h1>
      <div className={Styles.cardContainer}>
        <div className={Styles.cardColumn}>
          <FlashlightCursorWrapper className={Styles.card}>
            <h3>Community first</h3>
            <p>
              Our community is our greatest asset, XBorg is home to the most
              accomplished players in Web3. Our key product decisions are made
              with the community.
            </p>
          </FlashlightCursorWrapper>
          <FlashlightCursorWrapper className={Styles.card}>
            <h3>Transparency</h3>
            <p>
              We operate transparently with key metrics showing the success and
              failures of our ecosystem
            </p>
            <LinkButton text="View dashboard" to="" />
          </FlashlightCursorWrapper>
        </div>
        <div className={`${Styles.cardColumn} ${Styles.extraSpace}`}>
          <FlashlightCursorWrapper className={Styles.card}>
            <h3>Make community first</h3>
            <p>
              Our community is our greatest asset, XBorg is home to the most
              accomplished players in Web3.
            </p>
          </FlashlightCursorWrapper>
          <FlashlightCursorWrapper className={Styles.card}>
            <h3>Players are owners</h3>
            <p>
              Our key product decisions are made by the community with rewards
              going to them.
            </p>
          </FlashlightCursorWrapper>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
