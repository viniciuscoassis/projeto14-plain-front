import styled from "styled-components";

export default function CheckOutPreview({ children, element, itemQuantity }) {
  console.log(element);
  return (
    <Wrapper>
      <img src={element.image} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: red;
  width: 100%;
`;
