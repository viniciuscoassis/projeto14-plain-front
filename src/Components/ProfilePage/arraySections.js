export const arraySections = [
  {
    name: "Dados Pessoais",
    route: "/profile/userinfo",
    function: () => {
      console.log("");
    },
  },
  {
    name: "Endereços",
    route: "/",
    function: () => {
      console.log("");
    },
  },
  {
    name: "Pedidos",
    route: "/",
    function: () => {
      console.log("");
    },
  },
  {
    name: "Sair",
    route: "/",
    function: () => {
      localStorage.clear();
    },
  },
];