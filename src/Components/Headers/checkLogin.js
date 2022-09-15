export default function checkLogin() {
  let info = JSON.parse(localStorage.getItem("plainstore"));
  let user = {};
  if (info) {
    //checar se token é valido
    // checkToken(token).then().catch();

    user = {
      title: `Olá ${info.user.name}`,
      path: "/profile", //Mudar para profile depois
    };
  } else {
    user = {
      title: "Login",
      path: "/auth",
    };
  }
  return { user, info };
}
