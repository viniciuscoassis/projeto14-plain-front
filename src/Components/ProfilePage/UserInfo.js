import Headers from "../Headers/Headers";
import checkLogin from "../Headers/checkLogin";
import styled from "styled-components";
import * as BsIcons from "react-icons/bs";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { Notify } from "notiflix/build/notiflix-notify-aio";

import Footer from "../Footer/Footer";
import { updateUser } from "../../services/plainstore.js";

export default function UserInfo() {
  const { info } = checkLogin();

  function update(e, type) {
    const body = { [type]: e, email: info.user.email };
    updateUser(body)
      .then((e) => {
        Notify.success(`${type} atualizado com sucesso! Por favor, relogue.`);
      })
      .catch((e) => {
        Notify.failure("Atualização negada!");
      });
  }

  return (
    <>
      <Headers />
      <Container>
        <div className="avatar">
          <img src={info.user.img} alt="profile-img" />
          <BsIcons.BsPencilSquare
            className="edit"
            color={"black"}
            size={20}
            onClick={() => {
              Confirm.prompt(
                "Mudança de foto",
                "Digite o link da sua nova foto",
                `Link!`,
                "Enviar",
                "Cancelar",
                (clientAnswer) => {
                  update(clientAnswer, "img");
                }
              );
            }}
          />
        </div>
        <div className="info">
          <div className="name">
            <h1>{info.user.name}</h1>
            <BsIcons.BsPencilSquare
              color={"black"}
              size={20}
              onClick={() => {
                Confirm.prompt(
                  "Mudança de nome",
                  "Digite seu novo nome",
                  `Seu nome atual é ${info.user.name}!`,
                  "Enviar",
                  "Cancelar",
                  (clientAnswer) => {
                    update(clientAnswer, "name");
                  }
                );
              }}
            />
          </div>
          <div className="infos">
            <div>
              <p>Email:</p>
              <h2>{info.user.email}</h2>
            </div>
          </div>
          <div className="infos">
            <div>
              <p>CEP:</p>
              <h2>{info.user.cep}</h2>
              <BsIcons.BsPencilSquare
                color={"black"}
                size={20}
                onClick={() => {
                  Confirm.prompt(
                    "Mudança de CEP",
                    "Digite seu novo CEP",
                    `Seu nome atual é ${info.user.cep}!`,
                    "Enviar",
                    "Cancelar",
                    (clientAnswer) => {
                      update(clientAnswer, "cep");
                    }
                  );
                }}
              />
            </div>
          </div>
          <div className="infos">
            <div>
              <p>Número:</p>
              <h2>{info.user.numero}</h2>
              <BsIcons.BsPencilSquare
                color={"black"}
                size={20}
                onClick={() => {
                  Confirm.prompt(
                    "Mudança de número",
                    "Digite seu novo número",
                    `Seu nome atual é ${info.user.numero}!`,
                    "Enviar",
                    "Cancelar",
                    (clientAnswer) => {
                      update(clientAnswer, "numero");
                    }
                  );
                }}
              />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.main`
  color: #979797;
  padding-top: 80px;
  margin: 40px;
  .avatar {
    display: flex;
    justify-content: center;
    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .info {
    h1 {
      margin-top: 20px;
      text-align: center;
      font-size: 40px;
      color: black;
    }
  }
  .name {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .infos {
    display: flex;
    margin-top: 50px;
    justify-content: space-around;
    div {
      display: flex;
      gap: 5px;
    }
    p {
      font-size: 20px;
      color: black;
      font-weight: bold;
    }
    h2 {
      font-size: 20px;
      color: black;
    }
  }
`;
