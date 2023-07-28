import styles from "./Navbar.module.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a id={styles.job} href="/">Job Finder</a>
      <ul
        className={isMobile ? styles.nav_links_mobile : styles.nav_links}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className={styles.home}>
          <li>Ver vagas</li>
        </Link>
        <Link to="/registerjobs" className={styles.projects}>
          <li>
          <Button to={"/registerjobs"} variant="primary">Abrir Vaga</Button>{' '}
          </li>
        </Link>
      </ul>
      <button
        className={styles.mobile_menu_icon}
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
