import { useNavigate } from "react-router-dom";

export default function Product({ img, name, price }) {
  const navigate = useNavigate();
  const idLink = name.replace(/ /g, "-");

  return (
    <div className="product">
      <img
        src={img}
        alt="product"
        onClick={() => navigate(`/products/${idLink}`)}
      />
      <h2
        className="product-title"
        onClick={() => navigate(`/products/${idLink}`)}
      >
        {name}
      </h2>
      <p
        className="product-price"
        onClick={() => navigate(`/products/${idLink}`)}
      >
        R$ {Number(price).toFixed(2)}
      </p>
    </div>
  );
}
