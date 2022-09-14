import Headers from "../Headers/Headers.js";
import styled from "styled-components";
import FormContainer from "../FormContainer.js";
import { useState } from "react";
import TogglePasswordView from "../togglePasswordView.js";

export default function AuthScreen() {
  // const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);
  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  console.log(form);

  return (
    <Wrapper>
      <Headers cartQuantity="0"></Headers>
      <h3>Entrar com e-mail e senha</h3>
      <FormContainer>
        <input
          onChange={handleForm}
          type="email"
          name="email"
          value={form.email}
        ></input>
        <input
          type={passwordShown ? "text" : "password"}
          name="password"
          value={form.password}
          onChange={handleForm}
        ></input>
        <TogglePasswordView
          passwordShown={passwordShown}
          setPasswordShown={setPasswordShown}
          size="20px"
          right="45px"
          top="55px"
        />
        <button></button>
      </FormContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h3 {
    font-size: 13px;
    text-align: center;
    margin-bottom: 20px;
  }
`;
