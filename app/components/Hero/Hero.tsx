import styles from "./style.module.scss";

interface Props {
  src: string;
  alt: string;
}

export function Hero({ src, alt }: React.PropsWithChildren<Props>) {
  return <img src={src} alt={alt} className={styles.hero} />;
}
//export function ContentBox( {children} : React.PropsWithChildren) {
