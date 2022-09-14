import styled from "styled-components";
export default function FormContainer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  input {
    height: 40px;
    width: 80vw;
    margin: 0 auto;
    margin-bottom: 7px;
  }
  button {
    height: 40px;
    width: 80vw;
  }
`;
