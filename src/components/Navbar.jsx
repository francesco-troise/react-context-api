import { NavLink } from "react-router-dom";
import Logo from "../assets/boolean-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar  bg-body-tertiary ">
      <div className="container-fluid d-flex  ">
        <ul className="navbar-nav flex-row gap-3 ">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Homepage
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/AboutUs">
              About us
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/products">
              Prodotti
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
