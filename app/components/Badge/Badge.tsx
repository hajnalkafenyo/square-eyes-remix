import style from "./style.module.scss";

export function Badge({ children }: React.PropsWithChildren) {
  return <span className={style.badge}>{children}</span>;
}
