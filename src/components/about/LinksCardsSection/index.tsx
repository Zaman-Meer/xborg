import Image from "next/image";
import Link from "next/link";
import Styles from "./linksCardsSection.module.scss";
import Button from "@/components/common/Button";
import LinkButton from "@/components/common/LinkButton";

const LinksCardsSection = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainer}>
        <div className={`${Styles.card} ${Styles.card1}`}>
          <div className={Styles.card1Content}>
            <p>COMING SOON...</p>
            <h4>$XBG is the native token of the XBorg ecosystem.</h4>
            <Button variant="outlined">Register Interest</Button>
          </div>
        </div>
        <div className={`${Styles.card} ${Styles.card2}`}>
          <div className={Styles.card2Top}>
            <h4>Prometheus NFT</h4>
            <p>Join the 1,111 Prometheans shaping the future of gaming.</p>
          </div>
          <div className={Styles.card2Bottom}>
            <Button variant="outlined">View OpenSea</Button>
            <LinkButton text="Learn more" to="" />
          </div>
        </div>
        <div className={`${Styles.card} ${Styles.card3}`}>
          <div className={Styles.card3Top}>
            <h4>Join our Community</h4>
            <p>
              XBorg is home to the most accomplished players and distinguished
              investors in GameFi.
            </p>
          </div>
          <div className={Styles.card3Bottom}>
            <Image
              src="/assets/vectors/socialMediaIcons/twitter.svg"
              width={32}
              height={32}
              alt="twitter"
            />
            <Image
              src="/assets/vectors/socialMediaIcons/discord.svg"
              width={32}
              height={32}
              alt="discord"
            />
            <Image
              src="/assets/vectors/socialMediaIcons/youtube.svg"
              width={32}
              height={32}
              alt="youtube"
            />
            <Image
              src="/assets/vectors/socialMediaIcons/medium.svg"
              width={32}
              height={32}
              alt="medium"
            />

            <Image
              src="/assets/vectors/socialMediaIcons/twitch.svg"
              width={32}
              height={32}
              alt="twitch"
            />
          </div>
        </div>

        <div className={`${Styles.card} ${Styles.card4}`}>
          <h4>Built in Public</h4>
          <p>
            XBorg is built in transparency and decentralisation at its core.
          </p>

          <LinkButton text="Watch our latest Cyberlinks" to="" />
          <LinkButton text="View Blog" to="" />
          <LinkButton text="View Roadmap" to="" />
        </div>
      </div>
    </div>
  );
};

export default LinksCardsSection;
