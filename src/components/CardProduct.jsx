import { Link } from "react-router-dom";

export default function CardProduct({ prodotto }) {
  return (
    <Link
      to={`/products/${prodotto.id}`}
      //Link dinamico per ogni prodotto
      className="text-decoration-none text-dark"
    >
      <div className="card h-100 shadow-sm">
        <img
          src={prodotto.image}
          className="card-img-top img-fluid p-3"
          alt={prodotto.title}
          style={{ height: "250px", objectFit: "contain" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{prodotto.title}</h5>
          <h6 className="text-success mb-3">${prodotto.price}</h6>
          <p className="card-text text-truncate" title={prodotto.description}>
            {prodotto.description}
          </p>
          <span className="badge bg-primary mt-auto align-self-start">
            {prodotto.category}
          </span>
        </div>
      </div>
    </Link>
  );
}
