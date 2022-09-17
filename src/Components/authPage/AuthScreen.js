import Headers from "../Headers/Headers.js";
import styled from "styled-components";
import FormContainer from "../templates/FormContainer.js";
import { useState } from "react";
import TogglePasswordView from "../templates/togglePasswordView.js";
import { postLogin, postSignUp } from "../../services/plainstore.js";
import { useNavigate } from "react-router-dom";

export default function AuthScreen() {
  const navigate = useNavigate();
  const emptySignUp = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    img: "",
    cep: "",
    numero: "",
  };

  const emptyLogin = {
    email: "",
    password: "",
  };

  const [isLogin, setIsLogin] = useState(true);
  const [loginForm, setLoginForm] = useState(emptyLogin);
  const [signUpForm, setSignUpForm] = useState(emptySignUp);
  const [passwordShown, setPasswordShown] = useState(false);
  function handleForm(e) {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  }
  function handleForm2(e) {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();

    postLogin(loginForm)
      .then((res) => {
        console.log(res);
        localStorage.setItem("plainstore", JSON.stringify(res.data));
        navigate("/");
      })
      .catch((e) => alert(e.response.data));
  }

  function submitSignUpForm(e) {
    e.preventDefault();

    postSignUp(signUpForm)
      .then((res) => {
        alert("Cadastro feito com sucesso");
        setIsLogin(!isLogin);
      })
      .catch((e) => {
        setSignUpForm(emptySignUp);
        if (e.response.status === 409) {
          alert("Email já cadastrado");

          return;
        }

        alert("Dados invalidos");
      });
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
          placeholder="senha"
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
            setLoginForm(emptyLogin);
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
          placeholder="senha"
        ></input>
        <input
          onChange={handleForm2}
          type={passwordShown ? "text" : "password"}
          name="confirm_password"
          value={signUpForm.confirm_password}
          placeholder="confirme sua senha"
        ></input>
        <input
          onChange={handleForm2}
          type="text"
          name="img"
          value={signUpForm.img}
          placeholder="link da sua linda foto"
        ></input>
        <input
          onChange={handleForm2}
          type="text"
          name="cep"
          value={signUpForm.cep}
          placeholder="digite seu CEP"
        ></input>
        <input
          onChange={handleForm2}
          type="text"
          name="numero"
          value={signUpForm.numero}
          placeholder="digite número de celular"
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
          setSignUpForm(emptySignUp);
        }}
      >
        já tem uma conta? faça login
      </h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 130px;
  h3 {
    font-size: 13px;
    text-align: center;
    margin-bottom: 20px;
  }
`;
