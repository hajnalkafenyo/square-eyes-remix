import styles from "./styles.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "filled" | "outlined";
}

export function Button({ text, variant = "filled", ...restProps }: Props) {
  const buttonStyle =
    variant === "filled" ? styles.filledButton : styles.outlinedButton;

  return (
    <button className={`${styles.button} ${buttonStyle}`} {...restProps}>
      {text}
    </button>
  );
}
