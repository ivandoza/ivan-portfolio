import BackgroundAnimation from "./Animation";
import styles from "./Background.module.scss";
import Stars from "./Stars";

function Background(props) {

  const containerClass = props.containerClassName || styles.container;

  return (
    <div className={containerClass}>
      <Stars />
      <BackgroundAnimation />
    </div>
  );
}

export default Background;
