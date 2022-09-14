// import styled from "styled-components";
// import { MenuOutline } from "react-ionicons";
// import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
// import * as IoIcons from "react-icons/io";

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Produtos",
    path: "/",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/auth",
    icon: <FaIcons.FaUserAlt />,
    cName: "nav-text",
  },
];
