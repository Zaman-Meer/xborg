import Image from "next/image";
import Styles from "./footer.module.scss";
import Link from "next/link";

const LinksData = [
  {
    type: "ECOSYSTEM",
    links: [
      {
        name: "Infrastructure",
        to: "",
      },
      {
        name: "Applications",
        to: "",
      },
      {
        name: "Roadmap",
        to: "",
      },
      {
        name: "$XBG",
        to: "",
      },
    ],
  },
  {
    type: "Products",
    links: [
      {
        name: "GamerBase",
        to: "",
      },
      {
        name: "Launchpad",
        to: "",
      },
      {
        name: "Explorer",
        to: "",
      },
    ],
  },
  {
    type: "Community",
    links: [
      {
        name: "Hub",
        to: "",
      },
      {
        name: "Prometheus",
        to: "",
      },
      {
        name: "Governance",
        to: "",
      },
      {
        name: "Esports",
        to: "",
      },
    ],
  },
  {
    type: "Company",
    links: [
      {
        name: "About",
        to: "/about",
      },
      {
        name: "Blog",
        to: "",
      },
      {
        name: "FAQ",
        to: "",
      },
      {
        name: "Careers",
        to: "",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className={Styles.container} id="footer">
      <div className={Styles.innerContainer}>
        <div className={Styles.leftContainer}>
          <div className={Styles.topBox}>
            <Link href="/">
              <Image
                src="/assets/vectors/common/logo.svg"
                alt=""
                width={35}
                height={35}
              />
            </Link>
            <p>
              A collaborative credential infrastructure powering the next
              generation of gaming with the world's leading esports teams.
            </p>
          </div>
          <div className={Styles.bottomBox}>
            <div className={Styles.iconsBox}>
              <Image
                src="/assets/vectors/socialMediaIcons/twitter.svg"
                width={20}
                height={20}
                alt="twitter"
              />
              <Image
                src="/assets/vectors/socialMediaIcons/discord.svg"
                width={20}
                height={20}
                alt="discord"
              />
              <Image
                src="/assets/vectors/socialMediaIcons/youtube.svg"
                width={20}
                height={20}
                alt="youtube"
              />
              <Image
                src="/assets/vectors/socialMediaIcons/medium.svg"
                width={20}
                height={20}
                alt="medium"
              />

              <Image
                src="/assets/vectors/socialMediaIcons/twitch.svg"
                width={20}
                height={20}
                alt="twitch"
              />
            </div>
            <div className={Styles.line} />
          </div>
        </div>
        <div className={Styles.rightContainer}>
          <div className={Styles.linksContainer}>
            {LinksData?.map((linkData, index: number) => (
              <div key={index} className={Styles.linkList}>
                <p>{linkData?.type}</p>
                {linkData.links.map((link, i: number) => (
                  <Link key={i} href={link.to} className={Styles.link}>
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className={Styles.rightBottomBox}>
            <div className={Styles.line} />
            <div className={Styles.innerBox}>
              <span>© XBorg. 2023 — All rights reserved.</span>
              <div className={Styles.linkBox}>
                <Link href="" className={Styles.link}>
                  Privacy Policy
                </Link>
                <Link href="" className={Styles.link}>
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
