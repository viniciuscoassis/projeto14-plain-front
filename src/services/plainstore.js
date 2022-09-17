import axios from "axios";

let BASE_URL = "http://localhost:5000/";

function postSignUp(body) {
  let promisse = axios.post(`${BASE_URL}sign-up`, body);
  return promisse;
}

function postLogin(body) {
  let promisse = axios.post(`${BASE_URL}sign-in`, body);
  return promisse;
}

function updateUser(body) {
  let promisse = axios.put(`${BASE_URL}profile-update`, body);
  return promisse;
}

async function getProducts() {
  let promisse = await axios.get(`${BASE_URL}products`);
  return promisse;
}

async function getProductById(id) {
  let promisse = await axios.get(`${BASE_URL}products/${id}`);
  return promisse;
}

// function createHeaders() {
//   const auth = JSON.parse(localStorage.getItem("plainstore")).token;
//   const config = { headers: { Authorization: `Bearer ${auth}` } };
//   return config;
// }

export { postLogin, postSignUp, updateUser, getProducts, getProductById };
