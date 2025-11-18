import { useContext } from "react";
import BudgetContext from "../contexts/BudgetContext";

import { NavLink } from "react-router-dom";
import Logo from "../assets/boolean-logo.png";

export default function Navbar() {
  //Estrazione dello state e del relativo setter dal context BudgetContext
  const { budgetMode, setBudgetMode } = useContext(BudgetContext);

  //Funxione che inverte il valore dello stato(verrà richiamata al clik del button)
  const toggle_budget_mode = () => {
    setBudgetMode(!budgetMode);
  };

  //Gestione della classe del button
  const button_class = budgetMode ? "btn btn-warning" : "btn btn-success";

  //GEstione dle testo del button
  const button_text = budgetMode
    ? "disattiva Modalità Budget"
    : "Attiva Modalità Budget";

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

          <li className="nav-item">
            <button
              //gestisce la classe del button condizionandola allo stato
              className={button_class}
              //Attiva il toggler dello stato
              onClick={toggle_budget_mode}
            >
              {/*Gestione del testo del button*/}
              {button_text}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
