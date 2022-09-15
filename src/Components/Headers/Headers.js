import styled from "styled-components";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import Context from "../../Context/context.js";
import { useState, useContext } from "react";
import { SideBarData } from "./Sidebar";

export default function Headers() {
  const [sidebar, setSidebar] = useState(false);
  const { cartQuantity, name } = useContext(Context);
  let user = {};

  function checkLogin() {
    if (name !== "") {
      user = {
        title: name,
        path: "/", //Mudar para profile depois
      };
    } else {
      user = {
        title: "Login",
        path: "/auth",
      };
    }
  }
  checkLogin();

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Wrapper>
      <div>
        <FaIcons.FaBars
          color={"#00000"}
          title="menu"
          size={30}
          onClick={showSidebar}
        />
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <div className="menu-bars">
              <AiIcons.AiOutlineClose onClick={() => setSidebar(!sidebar)} />
            </div>
          </li>
          <li className="nav-text">
            <Link to={user.path}>
              <FaIcons.FaUserAlt />
              <span>{user.title}</span>
            </Link>
          </li>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <p>{cartQuantity}</p>
        <BsIcons.BsHandbag color="black" title="bag" size={30} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 80px;
  width: 375px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  .navbar {
    background-color: #060b26;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
  }

  .nav-menu {
    background-color: #060b26;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
  }

  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }

  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
  }

  .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  .nav-text a:hover {
    background-color: #1a83ff;
  }

  .nav-menu-items {
    width: 100%;
  }

  .navbar-toggle {
    background-color: #060b26;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  span {
    margin-left: 16px;
  }

  div:nth-child(4) {
    background-color: black;
    color: white;
    width: 20px;
    height: 20px;
    padding-left: 7px;
    padding-top: 1px;
    top: 20px;
    right: 6px;
    border-radius: 50%;
    p {
      text-align: center;
      position: absolute;
      right: 17px;
    }
  }
`;
