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
              <Link className="nav-link" to="/about">
                Ομαδική ψυχοθεραπεία
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Οικογενειακή
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ζεύγους
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
