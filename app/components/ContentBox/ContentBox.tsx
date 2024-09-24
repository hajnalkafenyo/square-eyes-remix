import styles from "./style.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function ContentBox({
  children,
  className,
}: React.PropsWithChildren<Props>) {
  return <div className={`${styles.contentBox} ${className}`}>{children}</div>;
}
