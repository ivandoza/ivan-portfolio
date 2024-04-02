import styles from "./Background.module.scss";

function BackgroundAnimation() {
  return (
    <>
      <div className={styles.starsContainer}>
        <div className={styles.shootingStars}></div>
      </div>
      <div className={styles.starsContainer2}>
        <div className={styles.shootingStars2}></div>
      </div>
    </>
  );
}

export default BackgroundAnimation;
