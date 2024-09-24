import style from "./style.module.scss";
import LoadingSpinner from "./loading.svg";

export function Loading() {
  return <img src={LoadingSpinner} alt="Loading" />;
}
