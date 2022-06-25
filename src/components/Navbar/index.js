import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}> Covid ID </h1>
        </div>

        <div>
          <ul className={styles.navbar__ul}>
            <li className={styles.navbar__li}></li>
              <Link to="/">Global</Link>
            <li className={styles.navbar__li}></li>
              <Link to="/Covid/Indonesia">Indonesia</Link>
            <li className={styles.navbar__li}></li>
              <Link to="/Covid/Provinsi">Provinsi</Link>
            <li className={styles.navbar__li}></li>
              <Link to="/Covid/About">About</Link> 
          </ul>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;
