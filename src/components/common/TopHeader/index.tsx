import Link from "next/link";
import Image from "next/image";
import Styles from "./topHeader.module.scss";
import Button from "../Button";

const TopHeader = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.centerTabContainer}>
        <Link href="" className={Styles.link}>
          Company
          <Image
            src="/assets/vectors/common/chevron-down.svg"
            alt=""
            width={24}
            height={24}
          />
        </Link>
        <Link href="" className={Styles.link}>
          Product
          <Image
            src="/assets/vectors/common/chevron-down.svg"
            alt=""
            width={24}
            height={24}
          />
        </Link>
        <Link href="/">
          <Image
            src="/assets/vectors/common/logo.svg"
            alt=""
            width={55}
            height={55}
          />
        </Link>
        <Link href="" className={Styles.link}>
          Ecosystem
        </Link>
        <Link href="" className={Styles.link}>
          Connect
          <Image
            src="/assets/vectors/common/chevron-down.svg"
            alt=""
            width={24}
            height={24}
          />
        </Link>
      </div>
      <div className={Styles.rightTabContainer}>
        <Button variant="outlined">Explore Apps</Button>
      </div>
    </div>
  );
};

export default TopHeader;
