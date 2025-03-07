import { Link, useLocation } from "react-router-dom";
import styles from "../Header/header.module.scss";

function Header() {
  const location = useLocation(); // взимаме текущия път (pathname)

  return (
    <nav className={styles.navigationWrapper}>
      <Link to="/" className={styles.logo}></Link>

      <div className={styles.navigation}>
        <Link
          to="/"
          className={location.pathname === "/" ? styles.activeLink : ""}
        >
          Начало
        </Link>
        <Link
          to="/about-us"
          className={location.pathname === "/about-us" ? styles.activeLink : ""}
        >
          За Нас
        </Link>
        <Link
          to="/services"
          className={location.pathname === "/services" ? styles.activeLink : ""}
        >
          Наши обекти
        </Link>
        <Link
          to="/contacts"
          className={location.pathname === "/contacts" ? styles.activeLink : ""}
        >
          Контакти
        </Link>
      </div>
    </nav>
  );
}

export default Header;
