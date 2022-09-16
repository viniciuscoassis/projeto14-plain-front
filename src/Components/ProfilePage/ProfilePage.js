import styled from "styled-components";
import Headers from "../Headers/Headers";

import { FaUserCircle } from "react-icons/fa";
import checkLogin from "../Headers/checkLogin";
import { arraySections } from "./arraySections";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { info } = checkLogin();

  return (
    <>
      <Headers></Headers>
      <Wrapper>
        <div className="perfil">
          <div className="avatar">
            {" "}
            <FaUserCircle size={70} color="#979797" />
          </div>
          <div className="saudacao">
            <div>olá,</div>
            <div>{`${info.user.name}!`}</div>
          </div>
        </div>
        <ul>
          {arraySections.map((value, index) => {
            return (
              <li
                onClick={() => {
                  navigate(value.route);
                  value.function();
                }}
                key={index}
              >
                {value.name}
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 55px;
  color: #979797;
  margin-top: 100px;

  .perfil {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
  }

  .perfil .saudacao {
    display: flex;
    height: 45px;
    flex-direction: column;
    justify-content: space-between;

    margin-left: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;

    justify-content: center;
  }
  ul li {
    margin-bottom: 45px;
  }
`;
