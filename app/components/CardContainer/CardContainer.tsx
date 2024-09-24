import { PropsWithChildren } from "react";
import style from "./styles.module.scss";

export function CardContainer({ children }: PropsWithChildren) {
  return <div className={style.CardContainer}>{children}</div>;
}
