import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import { useContext } from "react";
import Context from "../../Context/context";

export default function WrapperCart({ element, itemQuantity }) {
  const { cart, setCart } = useContext(Context);

  function removeCart(id) {
    let removido = cart.filter((value) => value.element._id != id);
    setCart(removido);
  }

  return (
    <Wrapper>
      <img src={element.img} />
      <div>
        <h2> {element.name}</h2>
        <h4>Tamanho: único</h4>
        <h1>{element.price.toFixed(2)}</h1>
        <h3>Quantidade: {itemQuantity}</h3>
      </div>
      <FaIcons.FaRegTrashAlt onClick={() => removeCart(element._id)} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
  }
  h2 {
    min-width: 160px;
  }
  div {
    display: flex;
    flex-direction: column;
    min-width: 60vw;
  }
`;
