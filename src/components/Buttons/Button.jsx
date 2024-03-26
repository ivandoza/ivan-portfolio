import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = ({
  texto,
  isTransparent,
  isBlue,
  isBlack,
  isWeb,
  isPortfolio,
  icon,
  onClick,
  link,
}) => {
  const className = cx({
    button: true,
    transparent: isTransparent,
    blue: isBlue,
    black: isBlack,
    web: isWeb,
    portfolio: isPortfolio,
  });
  return (
    <a className={className} onClick={onClick} href={link}>
      {texto}
      {icon}
    </a>
  );
};

export default Button;
