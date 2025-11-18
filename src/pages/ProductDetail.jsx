//import degli hoook
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductDetail() {
  //useParams legge l'id dinamico
  const { id } = useParams();
  // useNavigate serve per navigare "programmaticamente" tra le pagine
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  // Stato per il caricamento inizialmente true perché prima di chiamata API
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
      //loadign impostato su "false" a caricamento finito
      setLoading(false);
    });
  }, [id, navigate]);

  //carricamento ancora in corso
  if (loading) {
    return <h2 className="text-center py-5">Caricamento prodotto...</h2>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ objectFit: "contain", maxHeight: "400px" }}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <h4 className="text-success mb-3">${product.price}</h4>
          <p>{product.description}</p>
          <span className="badge bg-primary">{product.category}</span>
        </div>
      </div>
    </div>
  );
}
