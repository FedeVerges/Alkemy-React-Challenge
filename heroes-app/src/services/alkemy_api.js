import axios from "axios";

const URL_SEARCH =
  "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10216611231546944/search/";
const URL_LOGIN = "http://challenge-react.alkemy.org/";

export async function login(email, password) {
  return axios
    .post(URL_LOGIN, {
      email: email,
      password: password,
    })
    .then((response) => {
      const { token = "" } = response.data;
      return token;
    })
    .catch((error) => {
      if (error.response) {
        throw new Error({ name: "Login Error", message: error.message });
      }
      if (error.request) {
        throw new Error({
          name: "Login Request Error",
          message: error.message,
        });
      }
      throw new Error({ name: "Another Login Error", message: error.message });
    });
}

export async function searchHeroes(name) {
  return axios
    .get(URL_SEARCH + name)
    .then((response) => {
      console.log("response", response);
      const heroes = response.data.results;
      return heroes ? heroes : [];
    })
    .catch((error) => {
      if (error.response) {
        alert("Error: Ha ocurrido un error con el buscador");
      }
      return [];
    });
}
