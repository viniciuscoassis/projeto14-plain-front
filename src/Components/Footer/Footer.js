import styled from "styled-components";
import Face from "../../assets/img/facebook.svg";
import Insta from "../../assets/img/insta.svg";
import Twitter from "../../assets/img/twitter.svg";

export default function Footer() {
  return (
    <Container>
      <img src={Face} />
      <img src={Insta} />
      <img src={Twitter} />
    </Container>
  );
}

const Container = styled.footer`
  margin-top: 6px;
  height: 60px;
  display: flex;
  justify-content: space-around;
`;
