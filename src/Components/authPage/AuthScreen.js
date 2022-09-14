import Headers from "../Headers/Headers.js";
import styled from "styled-components";
import FormContainer from "../FormContainer.js";
import { useState } from "react";
import TogglePasswordView from "../togglePasswordView.js";

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirm_password: "",
    name: "",
  });
  const [passwordShown, setPasswordShown] = useState(false);
  function handleForm(e) {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  }
  function handleForm2(e) {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();
    console.log(loginForm);
  }

  function submitSignUpForm(e) {
    e.preventDefault();
    console.log(signUpForm);
  }

  return isLogin ? (
    <Wrapper>
      <Headers cartQuantity="0"></Headers>
      <h3>Entrar com e-mail e senha</h3>
      <FormContainer onSubmit={submitForm}>
        <input
          onChange={handleForm}
          type="email"
          name="email"
          value={loginForm.email}
          placeholder="email"
        ></input>
        <input
          onChange={handleForm}
          type={passwordShown ? "text" : "password"}
          name="password"
          value={loginForm.password}
          placeholder="Senha"
        ></input>
        <TogglePasswordView
          passwordShown={passwordShown}
          setPasswordShown={setPasswordShown}
          size="20px"
          right="45px"
          top="55px"
        />
        <button>entrar</button>

        <h3
          onClick={() => {
            setIsLogin(!isLogin);
            setLoginForm({ email: "", password: "" });
          }}
        >
          não tem uma conta? cadastre-se
        </h3>
      </FormContainer>
    </Wrapper>
  ) : (
    <Wrapper>
      <Headers cartQuantity="0"></Headers>
      <h3>Entrar com e-mail e senha</h3>
      <FormContainer onSubmit={submitSignUpForm}>
        <input
          onChange={handleForm2}
          type="name"
          name="name"
          value={signUpForm.name}
          placeholder="seu primeiro nome"
        ></input>
        <input
          onChange={handleForm2}
          type="email"
          name="email"
          value={signUpForm.email}
          placeholder="email"
        ></input>
        <input
          onChange={handleForm2}
          type={passwordShown ? "text" : "password"}
          name="password"
          value={signUpForm.password}
          placeholder="Senha"
        ></input>
        <input
          onChange={handleForm2}
          type={passwordShown ? "text" : "password"}
          name="confirm_password"
          value={signUpForm.confirm_password}
          placeholder="confirme sua senha"
        ></input>
        <TogglePasswordView
          passwordShown={passwordShown}
          setPasswordShown={setPasswordShown}
          size="20px"
          right="45px"
          top="105px"
        />
        <button>cadastrar-se</button>
      </FormContainer>

      <h3
        onClick={() => {
          setIsLogin(!isLogin);
          setSignUpForm({
            email: "",
            password: "",
            confirm_password: "",
            name: "",
          });
        }}
      >
        já tem uma conta? faça login
      </h3>
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
