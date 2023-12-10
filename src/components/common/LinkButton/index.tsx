import Image from "next/image";
import Link from "next/link";
import Styles from "./linkButton.module.scss";

interface LinkButtonProps {
  text: string;
  to: string;
}

const LinkButton = ({ text, to }: LinkButtonProps) => {
  return (
    <Link href={to} className={Styles.link}>
      {text}
      <Image
        src="/assets/vectors/common/chevron-right.svg"
        width={24}
        height={24}
        alt="arrow-right"
      />
    </Link>
  );
};

export default LinkButton;
