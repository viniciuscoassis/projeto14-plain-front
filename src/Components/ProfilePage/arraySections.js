export const arraySections = [
  {
    name: "Dados Pessoais",
    route: "/userinfo",
    function: () => {},
  },
  {
    name: "Endereços",
    route: "/",
    function: () => {
      alert("Função ainda não disponível");
    },
  },
  {
    name: "Pedidos",
    route: "/",
    function: () => {
      alert("Função ainda não disponível");
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
