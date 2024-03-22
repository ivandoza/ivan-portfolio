import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = ({
  texto,
  isTransparent,
  isBlue,
  icon,
  onClick,
}) => {
  const className = cx({
    button: true,
    transparent: isTransparent,
    blue: isBlue,
  });
  return (
    <button className={className} onClick={onClick}>
      {texto}
      {icon}
    </button>
  );
};

export default Button;
