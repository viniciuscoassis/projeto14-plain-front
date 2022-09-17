import styled from "styled-components";
export default function FormContainer({ children, onSubmit }) {
  return <Wrapper onSubmit={onSubmit}>{children}</Wrapper>;
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: -3;

  input {
    height: 40px;
    width: 80vw;
    margin: 0 auto;
    margin-bottom: 7px;
  }
  button {
    height: 40px;
    width: 80vw;
    margin-bottom: 20px;
  }
`;
