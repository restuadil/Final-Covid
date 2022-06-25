import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
    <nav className={styles.navbar}>
      <div>
        <h1 className={styles.navbar__brand}> Covid ID </h1>
        <p className={styles.navbar__brand}>Devlopment By Me </p>
      </div>
      <div>
          <ul className={styles.navbar__ul}>
            <li className={styles.navbar__li}></li>
              <Link to="/">Global</Link>
            <li className={styles.navbar__li}></li>
              <Link to="/">Indonesia</Link>
            <li className={styles.navbar__li}></li>
              <Link to="/">Provinsi</Link>
            <li className={styles.navbar__li}></li>
              <Link to="/">About</Link> 
          </ul>
        </div>
    </nav>
  </div>
  );
}

export default Footer;
