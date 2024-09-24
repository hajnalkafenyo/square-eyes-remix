import React from "react";
import { Icon } from "~/Icon/Icon";

import styles from "./style.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  alt: string;
}

export function IconButton({ src, alt, ...restProps }: Props) {
  return (
    <button {...restProps} className={styles.iconButton}>
      <Icon src={src} alt={alt} />
    </button>
  );
}
