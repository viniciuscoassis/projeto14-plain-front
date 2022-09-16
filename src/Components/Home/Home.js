import styled from "styled-components";
import Headers from "../Headers/Headers.js";
import Homeimg from "../../assets/img/homeimg.svg";
import LadYhOME from "../../assets/img/moça.png";
import Footer from "../Footer/Footer.js";

export default function Home() {
  return (
    <>
      <Headers cartQuantity="1" />
      <Container>
        <div className="warnings">
          <p>parcelamento de até 10x sem juros</p>
          <div className="divisor"></div>
          <p>5% de desconto para pagamentos no pix</p>
        </div>
        <img src={Homeimg} alt="product" />
        <img src={LadYhOME} alt="product" />
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.main`
  margin-top: 80px;

  .warnings {
    height: 73px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: black;
    color: white;
  }
  .divisor {
    height: 1px;
    width: 162px;
    background-color: white;
  }
  img {
    margin-top: 11px;
  }
`;
