import Context from "../../Context/context.js";
import { useContext, useState } from "react";
import Headers from "../Headers/Headers.js";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer.js";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { storage } = useContext(Context);
  const [itemQuantity, setItemQuantity] = useState(0);

  const { nomeProduto } = useParams();
  const element = storage.find((e) => {
    if (e.name === nomeProduto.replace(/-/g, " ")) {
      return e;
    }
  });
  if (itemQuantity > Number(element.amount)) {
    setItemQuantity(itemQuantity - 1);
  } else if (itemQuantity < 0) {
    setItemQuantity(0);
  }

  return (
    <>
      <Headers />
      <Container>
        <div className="first-session">
          <h1>{element.name}</h1>
          <h2>R$ {Number(element.price).toFixed(2)}</h2>
          <img src={element.img} alt="img" />
        </div>
        <div className="divisor"></div>
        <div className="second-session">
          <h1>{element.name}</h1>
          <h2>R$ {Number(element.price).toFixed(2)}</h2>
          <p>
            Pague com <strong>PIX</strong> e ganhe mais{" "}
            <strong>5% de desconto</strong>
          </p>
          <p>
            Parcele sua compra em até <strong>10x sem juros</strong>
          </p>
          <div className="quantity">
            <button
              onClick={() => {
                setItemQuantity(itemQuantity - 1);
              }}
            >
              -
            </button>
            <p>{itemQuantity}</p>
            <button
              onClick={() => {
                setItemQuantity(itemQuantity + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="third-session">
          <div className="frete">
            <p>
              FRETE E <br /> PRAZO
            </p>
            <form>
              <input type="text"></input>
              <button>{">"}</button>
            </form>
          </div>
        </div>
        <div className="buy">
          <button onClick={() => navigate("/produtos")}>
            ADICIONAR AO CARRINHO
          </button>
        </div>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.main`
  margin: 0 auto;
  margin-top: 0px;
  img {
    width: 300px;
    height: 380px;
    padding-bottom: 40px;
  }
  .first-session {
    background-color: #f4f4f4;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }
  h1 {
    width: 90%;
    text-align: start;
    margin-top: 40px;
    font-size: 30px;
    color: black;
  }
  h2 {
    width: 90%;
    text-align: start;
    font-size: 26px;
    font-weight: bold;
    color: black;
  }
  .divisor {
    width: 320px;
    height: 1px;
    background-color: black;
    margin: 40px auto 40px auto;
  }
  .second-session {
    background-color: #f4f4f4;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }
  .quantity {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    height: 50px;
    background-color: white;
    margin-bottom: 10px;
    p {
      font-size: 25px;
    }
    button {
      height: 50px;
      border: none;
      background-color: white;
      font-size: 30px;
    }
  }
  .third-session {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    .frete {
      width: 90%;
      height: 50px;
      background-color: #f4f4f4;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      p {
        font-size: 12px;
        color: black;
      }
      input {
        border: none;
        border-bottom: 1px solid black;
        background-color: white;
        width: 200px;
        height: 30px;
      }
      button {
        border: none;
        border-bottom: 1px solid black;
        background-color: white;
        height: 30px;
        font-size: 15px;
      }
    }
  }
  .buy {
    width: 100%;
    display: flex;
    justify-content: center;
    button {
      border: none;
      background-color: green;
      width: 300px;
      height: 50px;
      color: white;
      font-weight: bold;
      font-size: 20px;
    }
  }
`;
