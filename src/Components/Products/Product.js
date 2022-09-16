import { useNavigate } from "react-router-dom";

export default function Product({ img, name, price }) {
  const navigate = useNavigate();

  return (
    <div className="product">
      <img src={img} alt="product" onClick={() => navigate("/")} />
      <h2 className="product-title" onClick={() => navigate("/")}>
        {name}
      </h2>
      <p className="product-price" onClick={() => navigate("/")}>
        R$ {price}
      </p>
    </div>
  );
}
