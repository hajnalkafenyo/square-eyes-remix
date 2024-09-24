import styles from "./style.module.scss";

interface Props {
  src: string;
  alt: string;
}

export function Icon({ src, alt }: React.PropsWithChildren<Props>) {
  return <img src={src} alt={alt} className={styles.icon} />;
}
//export function ContentBox( {children} : React.PropsWithChildren) {
