import styled from "styled-components";
import { MenuOutline, BagHandleOutline } from "react-ionicons";
import logo from "../../assets/img/logo.svg";

export default function Headers({ cartQuantity }) {
  return (
    <Wrapper>
      <div>
        <MenuOutline color={"#00000"} title="menu" height="30px" width="30px" />
      </div>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <BagHandleOutline
          color={"#00000"}
          title="bag"
          height="30px"
          width="30px"
        />
      </div>
      <div>{cartQuantity}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;

  div:nth-child(4) {
    background-color: black;
    color: white;
    position: absolute;
    width: 20px;
    height: 20px;
    padding-left: 7px;
    padding-top: 1px;
    top: 20px;
    right: 6px;
    border-radius: 50%;
  }
`;
