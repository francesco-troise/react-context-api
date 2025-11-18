import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-light p-4">
        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
          <li>
            <Link to="#" className="text-dark text-decoration-none">
              Informazioni legali
            </Link>
          </li>
          <li>
            <Link to="#" className="text-dark text-decoration-none">
              Contatta l'uffcio vendite
            </Link>
          </li>
          <li>
            <Link to="#" className="text-dark text-decoration-none">
              Informazioni a caso
            </Link>
          </li>
          <li>
            <Link to="#" className="text-dark text-decoration-none">
              Altre informazioni casuali
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
