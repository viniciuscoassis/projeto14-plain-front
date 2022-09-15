import { useState } from "react";
import styled from "styled-components";
import Headers from "../Headers/Headers.js";
import Productphoto from "../../assets/img/homeimg.svg";
import { useNavigate } from "react-router-dom";
import Button from "./Button.js";

export default function Products() {
  const navigate = useNavigate();

  const [productsFilter, setProductsFilter] = useState("TODOS");
  const filters = ["vestuário", "acessórios", "calçados"];
  return (
    <>
      <Headers />
      <Container>
        <h1>{productsFilter}</h1>
        <div className="filters">
          <div className="filters-buttons">
            {filters.map((item, index) => {
              return (
                <Button
                  key={index}
                  title={item.toUpperCase()}
                  state={setProductsFilter}
                />
              );
            })}
          </div>
          <p
            className="clear-filters"
            onClick={() => setProductsFilter("TODOS")}
          >
            Limpar filtro
          </p>
        </div>
        <div className="products-container">
          <div className="product">
            <img
              src={Productphoto}
              alt="product"
              onClick={() => navigate("/")}
            />
            <h2 className="product-title" onClick={() => navigate("/")}>
              TITULO DO PRODUTO
            </h2>
            <p className="product-price" onClick={() => navigate("/")}>
              R$ 00,00
            </p>
          </div>
          <div className="product">
            <img
              src={Productphoto}
              alt="product"
              onClick={() => navigate("/")}
            />
            <h2 className="product-title" onClick={() => navigate("/")}>
              TITULO DO PRODUTO
            </h2>
            <p className="product-price" onClick={() => navigate("/")}>
              R$ 00,00
            </p>
          </div>
          <div className="product">
            <img
              src={Productphoto}
              alt="product"
              onClick={() => navigate("/")}
            />
            <h2 className="product-title" onClick={() => navigate("/")}>
              TITULO DO PRODUTO
            </h2>
            <p className="product-price" onClick={() => navigate("/")}>
              R$ 00,00
            </p>
          </div>
          <div className="product">
            <img
              src={Productphoto}
              alt="product"
              onClick={() => navigate("/")}
            />
            <h2 className="product-title" onClick={() => navigate("/")}>
              TITULO DO PRODUTO
            </h2>
            <p className="product-price" onClick={() => navigate("/")}>
              R$ 00,00
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.main`
  h1 {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: black;
  }
  .filters {
    background-color: #ececec;
    height: 100px;
    margin-top: 5px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .filters-buttons {
    width: 100%;
    display: flex;
    justify-content: space-around;
    button {
      border: none;
      background-color: white;
      width: 100px;
      height: 47px;
    }
    button:focus {
      border-bottom: 1px solid black;
    }
  }

  .products-container {
    img {
      width: 167px;
      height: 243px;
    }
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
    h2 {
      color: black;
      font-size: 15px;
      margin-bottom: 5px;
    }
    p {
      font-size: 16px;
      color: red;
      font-weight: bold;
    }
  }
`;
