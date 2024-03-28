import BackgroundAnimation from "./Animation";
import styles from "./Background.module.scss";
import Stars from "./Stars";

function Background() {
  return (
    <div className={styles.container}>
      <Stars />
      <BackgroundAnimation />
    </div>
  );
}

export default Background;
