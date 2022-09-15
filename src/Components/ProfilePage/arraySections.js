export const arraySections = [
  { name: "Dados Pessoais", route: "/profile/userinfo" },
  { name: "Endereços", route: "/" },
  { name: "Pedidos", route: "/" },
  {
    name: "Sair",
    route: "/",
    function: () => {
      localStorage.clear();
    },
  },
];
