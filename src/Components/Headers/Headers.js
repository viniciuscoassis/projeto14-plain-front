import styled from "styled-components";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import Context from "../../Context/context.js";
import { useState, useContext } from "react";
import { SideBarData } from "./Sidebar";

import ProgressBar from "@ramonak/react-progress-bar";
import checkLogin from "./checkLogin";
import WrapperCart from "./WrapperCart";

export default function Headers() {
  const [sidebar, setSidebar] = useState(false);
  const [CartMenu, setCartMenu] = useState(false);
  const [checkOut, setCheckOut] = useState(false);

  const { cart } = useContext(Context);

  let user = checkLogin().user;

  const showCartMenu = () => setCartMenu(!CartMenu);
  const showSidebar = () => setSidebar(!sidebar);

  let totalSum = 0;
  cart.forEach((val) => {
    let sum = val.element.price * val.itemQuantity;
    totalSum += sum;
  });
  const valFreteGratis = 299.9;
  let valorParaFrete = valFreteGratis - totalSum;
  let porcentagemParaFrete = Math.floor((totalSum / valFreteGratis) * 100);

  function initiateCheckout(e) {
    e.preventDefault();
    if (!user) {
      alert("logue-se por favor para finalizar seu carrinho");
    }
    setCheckOut(!checkOut);
  }

  function submitCupom(e) {
    e.preventDefault();
    alert("Este cupom não é mais válido");
  }

  return (
    <Wrapper>
      <div>
        <FaIcons.FaBars
          color={"#00000"}
          title="menu"
          size={30}
          onClick={showSidebar}
        />
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <div className="menu-bars">
              <AiIcons.AiOutlineClose onClick={() => setSidebar(!sidebar)} />
            </div>
          </li>
          <li className="nav-text">
            <Link to={user.path}>
              <FaIcons.FaUserAlt />
              <span>{user.title}</span>
            </Link>
          </li>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className={CartMenu ? "cart-menu active" : "cart-menu"}>
        <div className="headerCartMenu">
          <img src={logo} alt="plain logo" />

          <h2>Sacola</h2>
          <AiIcons.AiOutlineClose
            size={20}
            color="black"
            onClick={showCartMenu}
          />
        </div>
        <ContainerFreeFrete>
          <h2>
            {valorParaFrete < 0
              ? "Você conseguiu frete grátis!"
              : `faltam R$ ${valorParaFrete.toFixed(2)} para frete grátis`}
          </h2>
          <div>
            <h3>{`R$${totalSum}`}</h3>
            <div>
              {" "}
              <ProgressBar
                completed={
                  porcentagemParaFrete > 100 ? 100 : porcentagemParaFrete
                }
                width="50vw"
                height="15px"
                labelSize="10px"
                margin="0 20px"
                bgColor="	yellowgreen"
                labelColor="black"
              />
            </div>

            <h3>R$299,90</h3>
          </div>
        </ContainerFreeFrete>

        <CartContainer>
          {cart.length === 0 ? (
            <>
              {" "}
              <h1>SEU CARRINHO ESTÁ VAZIO :(</h1>
              <h3>CONTINUE COMPRANDO</h3>
            </>
          ) : (
            <>
              {cart.map((value) => (
                <WrapperCart
                  element={value.element}
                  itemQuantity={value.itemQuantity}
                ></WrapperCart>
              ))}
            </>
          )}
        </CartContainer>
        <CupomContainer onSubmit={submitCupom}>
          {" "}
          <label>CUPOM DE DESCONTO</label>
          <div>
            <input type="text" placeholder="insira seu cupom"></input>
            <button>enviar</button>
          </div>
        </CupomContainer>
        {cart.length === 0 ? (
          ""
        ) : (
          <Total>
            <div>
              <h1>TOTAL</h1> <h2>R${totalSum.toFixed(2)}</h2>
            </div>
            <div>
              <button onClick={initiateCheckout}>FINALIZAR COMPRA</button>
              <h2 onClick={() => setCartMenu(!CartMenu)}>
                CONTINUAR COMPRANDO
              </h2>
            </div>
          </Total>
        )}

        <InfoContainer>
          <p>(xx)xxxx-xxxx </p>
          <p>sac@plaincompany.com.br</p>
          <p>Rua xx xxxx, xxx - Bairro xxx, SP</p>
        </InfoContainer>
      </nav>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <CartIcon>
        <div>{cart.length}</div>
        <BsIcons.BsHandbag
          onClick={showCartMenu}
          color="black"
          title="bag"
          size={30}
        />
      </CartIcon>
      {checkOut ? (
        <CheckOut>
          <div className="containerInfoCheckOut">
            <h4 onClick={() => setCheckOut(!checkOut)}>X</h4>
            <h1>RESUMO DO PEDIDO</h1>
            <div className="containerSumUp">
              {cart.map((value) => (
                <>
                  {" "}
                  <div>
                    <img src={value.element.img} />
                    <h2>{value.element.name}</h2>
                  </div>
                </>
              ))}
            </div>
            <button>FINALIZAR PEDIDO</button>
            <h1>ENDEREÇO</h1>
            <p>{user.cep}</p>
          </div>
        </CheckOut>
      ) : (
        ""
      )}
    </Wrapper>
  );
}
const CheckOut = styled.div`
  z-index: 1001;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .containerSumUp {
    background-color: red;
    height: 20vh;
    width: 70vw;
    margin-bottom: 10px;

    div {
      background-color: blue;
      max-width: 20vw;
      max-height: 100%;
      margin-right: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 20vw;
      height: 20vh;
      object-fit: cover;
    }
  }

  .containerInfoCheckOut {
    background-color: white;
    width: 80vw;
    height: 70vh;
    position: relative;
    padding: 20px;

    h1 {
      font-weight: 700;
    }

    h4 {
      font-weight: 800;
      position: absolute;
      right: 10px;
      top: 10px;
    }
    button {
      position: absolute;
      bottom: 5vw;
      right: 20vw;
      height: 30px;
      font-weight: 700;
      border: none;
      background-color: #228b22;
      color: white;
    }
  }
`;

const Total = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 20vh;
  align-items: center;
  justify-content: space-around;
  div:first-child {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  div:nth-child(2) {
    display: flex;
    height: 10vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button {
      width: 90vw;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: 600;
      background-color: #1ba14e;
      color: white;
      height: 35px;
      border: none;
    }
    h2 {
      font-size: 12px;
      margin-top: 10px;
      font-weight: 600;
    }
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: gray;
  font-size: 12px;
`;

const CartIcon = styled.div`
  div {
    position: absolute;
    display: flex;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
    background-color: black;
    border-radius: 50%;
    color: whitesmoke;
    right: 10px;
  }
`;

const CupomContainer = styled.form`
  height: 12vh;
  background-color: lightgray;
  width: 100%;
  display: flex;
  padding: 30px;
  justify-content: center;
  flex-direction: column;

  div {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  label {
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    border: none;

    padding: 5px 0;
  }

  button {
    border: none;
    background-color: black;
    color: white;
    font-weight: 700;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
  }
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  min-height: 40vh;
  max-height: 40vh;
  width: 100vw;

  h1 {
    color: grey;
    font-weight: 600;
  }
  h3 {
    font-size: 16px;
    margin-top: 15px;
    font-weight: 400;
    color: grey;
  }
`;
const ContainerFreeFrete = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  height: 80px;
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

const Wrapper = styled.div`
  height: 80px;
  width: 375px;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 0 15px;
  position: fixed;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;
  z-index: 1;

  .cart-menu {
    background-color: #ffffff;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;
    z-index: 1000;
  }
  .cart-menu.active {
    right: 0;
    transition: 350ms;
  }
  .cart-menu .headerCartMenu {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
  }

  .navbar {
    background-color: #060b26;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
    z-index: 1000;
  }

  .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
    z-index: 1000;
  }

  .nav-menu {
    background-color: #060b26;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
    z-index: 1000;
  }

  .nav-menu.active {
    left: 0;
    transition: 350ms;
    z-index: 1000;
  }

  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
    z-index: 1000;
  }

  .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  .nav-text a:hover {
    background-color: #1a83ff;
  }

  .nav-menu-items {
    width: 100%;
    z-index: 1000;
  }

  .navbar-toggle {
    background-color: #060b26;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  span {
    margin-left: 16px;
  }
`;
