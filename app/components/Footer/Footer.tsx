import { LogoIcon } from "../LogoIcon/LogoIcon";
import FacebookIcon from "./images/_Facebook.png";
import InstagramIcon from "./images/_Instagram.png";
import TwitterIcon from "./images/_Twitter.png";
import YouTubeIcon from "./images/_YouTube.png";
import style from "./style.module.scss";

export function Footer() {
  return (
    <footer>
      <div>
        <h2>Square Eyes As</h2>
        <ul>
          <li>
            <a href="aboutus.html">About us</a>
          </li>
          <li>
            <a href="cookie-policy.html">Cookie policy</a>
          </li>
          <li>Privacy policy</li>
        </ul>
        <p>All rights reserved &copy;2022</p>
      </div>
      <div className="hide-on-mobile">
        <a href="index.html">
          <LogoIcon />
        </a>
      </div>
      <ul className={style.socialMediaIcons}>
        <li className="social-media-icon">
          <img src={FacebookIcon} alt="Facebook icon" />
        </li>
        <li className={style.socialMediaIcon}>
          <img src={InstagramIcon} alt="Instagram icon" />
        </li>
        <li className={style.socialMediaIcon}>
          <img src={TwitterIcon} alt="Twitter icon" />
        </li>
        <li className={style.socialMediaIcon}>
          <a target="_blank" href="https://www.youtube.com/watch?v=sCNrK-n68CM">
            <img src={YouTubeIcon} alt="YouTube icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
