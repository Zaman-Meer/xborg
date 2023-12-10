import { ButtonHTMLAttributes } from "react";
import Styles from "./button.module.scss";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, ""> {
  children: React.ReactNode | React.ReactNode[];
  variant?: "contained" | "outlined";
}

const Button = ({
  children,
  variant = "contained",
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={`${Styles.button} ${
        variant === "outlined" ? Styles.outlined : Styles.contained
      }`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
