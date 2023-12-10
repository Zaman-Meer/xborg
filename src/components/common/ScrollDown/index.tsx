import Styles from "./scrollDown.module.scss";
import Image from "next/image";

interface ScrollDownProps {
  onClick?: () => void;
}
const ScrollDown = ({ onClick }: ScrollDownProps) => {
  return (
    <div className={Styles.container}>
      <a href="#footer">
        <div className={Styles.innerContainer} onClick={onClick}>
          <span>Scroll down</span>
          <Image
            src="/assets/vectors/common/arrow-down.svg"
            width={15}
            height={8}
            alt="arrow-down"
          />
        </div>
      </a>
    </div>
  );
};

export default ScrollDown;
