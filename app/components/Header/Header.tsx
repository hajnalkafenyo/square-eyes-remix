import { Link } from "@remix-run/react";
import { LogoIcon } from "../LogoIcon/LogoIcon";
import trolleyIcon from "./shopping-trolley-icon.svg";
import styles from "./style.module.scss";
import { useCartContext } from "~/CartContext";

export function Header() {
  const { items } = useCartContext();
  return (
    <header className={styles.header}>
      <Link to="/">
        <LogoIcon />
      </Link>
      <input className={styles.sideMenu} type="checkbox" id="side-menu" />
      <label className={styles.hamburgerIcon} htmlFor="side-menu">
        <span style={{ display: "none" }}>Hamburger menu</span>
      </label>
      <nav className={styles.headerMenu}>
        <ul className={styles.menu}>
          <li>
            <Link to="">My profile</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="about">About us</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.shoppingCart}>
        <Link to="cart">
          {" "}
          <img src={trolleyIcon} alt="Shopping cart" />
        </Link>
        <span className={styles.shoppingCartCount}> {items.length}</span>
      </div>
    </header>
  );
}
