import React from "react";
import { Link } from "gatsby";
import "./index.css";
const NavBar = () => {
  return (
    <section className="top-nav">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Αρχική
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/about">
            Βιογραφικό
          </Link>
        </li>
        <li className="nav-item submenu">
          <Link className="nav-link" to="#">
            Υπηρεσίες
          </Link>
          <ul className="submenu-items">
            <li className="nav-item">
              <Link className="nav-link" to="/atomiki">
                 Ατομική ψυχοθεραπεία
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/omadiki">
                Ομαδική ψυχοθεραπεία
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/oikogeneiaki">
                Οικογενειακή ψυχοθεραπεία
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/zeugous">
                Ψυχοθεραπεία ζεύγους
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/symvouleutiki">
                Συμβουλευτική γονέων
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Επικοινωνία
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default NavBar;
