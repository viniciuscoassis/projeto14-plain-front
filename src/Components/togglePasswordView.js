import eye from "../../src/assets/img/eye.png";
import noeye from "../../src/assets/img/noeye.png";
import styled from "styled-components";

export default function TogglePasswordView({
  setPasswordShown,
  passwordShown,
  top,
  right,
  size,
}) {
  return (
    <Wrapper
      onClick={() => setPasswordShown(!passwordShown)}
      size={size}
      top={top}
      right={right}
    >
      <img src={passwordShown ? noeye : eye} alt="password visibility" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};

  img {
    width: ${(props) => props.size};
    height: ${(props) => props.size};
  }
`;
