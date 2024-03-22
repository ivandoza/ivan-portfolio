import styles from "./Background.module.scss";

function BackgroundAnimation() {
  return (
    <div className={styles.container}>
      <div className={styles.stars}></div>
      <div className={styles.stars1}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      <div className={styles.starsContainer}>
        <div className={styles.shootingStars}></div>
      </div>
      <div className={styles.starsContainer2}>
        <div className={styles.shootingStars2}></div>
      </div>
    </div>
      

  );
}

export default BackgroundAnimation;