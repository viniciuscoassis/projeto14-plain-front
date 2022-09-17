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
            <img src={info.user.img} alt="profile-img" />
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
  color: #979797;
  padding-top: 80px;
  margin: 40px;

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
  .avatar {
    img {
      height: 100px;
      width: 100px;
      border-radius: 50%;
    }
  }
`;
