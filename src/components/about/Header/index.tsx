import Styles from "./header.module.scss";
import Button from "@/components/common/Button";
import ScrollDown from "@/components/common/ScrollDown";

const Header = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <div className={Styles.leftContent}>
          <div className={Styles.content}>
            <p>Lorem ipsum dolor</p>
            <h1>Empowering players & fans</h1>
            <p>
              We’re a global team on a mission to build the next-generation of
              gaming, where players and fans experience ownership, and
              governance and are rewarded for their contributions.
            </p>
            <Button>Join Discord</Button>
          </div>
        </div>
        <div className={Styles.rightContent}>
          <div className={Styles.layoutImage}></div>
        </div>
      </div>
      <ScrollDown />
    </div>
  );
};

export default Header;
