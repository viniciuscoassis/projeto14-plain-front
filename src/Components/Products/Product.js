import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Product({ id, img, name, price }) {
  const navigate = useNavigate();
  // const idLink = name.replace(/ /g, "-");

  return (
    <Wrapper>
      <img
        src={img}
        alt="product"
        onClick={() => navigate(`/products/${id}`)}
      />
      <h2 className="product-title" onClick={() => navigate(`/products/${id}`)}>
        {name}
      </h2>
      <p className="product-price" onClick={() => navigate(`/products/${id}`)}>
        R$ {Number(price).toFixed(2)}
      </p>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  img {
    object-fit: cover;
  }
`;
