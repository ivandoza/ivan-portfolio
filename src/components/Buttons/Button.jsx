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
  openInNewTab,
}) => {
  const className = cx({
    button: true,
    transparent: isTransparent,
    blue: isBlue,
    black: isBlack,
    web: isWeb,
    portfolio: isPortfolio,
  });
  const target = openInNewTab ? "_blank" : "_self";
  return (
    <a className={className} onClick={onClick} target={target} href={link}>
      {texto}
      {icon}
    </a>
  );
};

export default Button;
