import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Headers from "../Headers/Headers.js";
import Button from "./Button.js";
import { getProducts } from "../../services/plainstore.js";
import Context from "../../Context/context.js";
import Product from "./Product.js";
import Footer from "../Footer/Footer.js";

export default function Products() {
  const { storage, setStorage } = useContext(Context);
  const [productsFilter, setProductsFilter] = useState("TODOS");
  const filters = ["vestuário", "acessórios", "calçados"];

  useEffect(() => {
    (async () => {
      try {
        const products = await getProducts();
        setStorage(products.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [setStorage]);

  const result = storage.filter(checkType);

  function checkType(product) {
    const type = product.type;
    if (type === productsFilter.toLowerCase() || productsFilter === "TODOS") {
      return product;
    }
  }
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
          {result.map((item, index) => {
            return (
              <Product
                key={index}
                id={item._id}
                img={item.img}
                name={item.name}
                price={item.price}
              />
            );
          })}
        </div>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.main`
  margin-top: 120px;
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
      width: 150px;
      height: 243px;
    }
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
    h2 {
      max-width: 150px;
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
