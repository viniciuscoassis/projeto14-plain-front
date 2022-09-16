import styled from "styled-components";
import Face from "../../assets/img/facebook.svg";
import Insta from "../../assets/img/insta.svg";
import Twitter from "../../assets/img/twitter.svg";

export default function Footer() {
  return (
    <Container>
      <div className="social">
        <img src={Face} alt="facebook" />
        <img src={Insta} alt="instagram" />
        <img src={Twitter} alt="twitter" />
      </div>
      <p>© Plain Store - Todos os direitos reservados</p>
      <p>Plain Store Indústria Ltda. CNPJ</p>
    </Container>
  );
}

const Container = styled.footer`
  margin-top: 6px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .social {
    display: flex;
    gap: 50px;
  }
  p {
    font-size: 12px;
  }
`;
