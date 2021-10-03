import axios from "axios";

const URL_SEARCH =
  "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10216611231546944/search/";

export async function login(email, password, URL) {
  return axios
    .post(URL, {
      email: email,
      password: password,
    })
    .then((response) => {
      const { token = "0" } = response.data;
      console.log(token);
      return token;
      // guardar cookie en localstorage.
    })
    .catch((error) => {
      alert("Ha ocurrido un error: " + error);
      console.log(error);
      return "";
    });
}

export async function searchHeroes(name) {
  return axios
    .get(URL_SEARCH + name)
    .then((response) => {
      console.log("response", response);
      const heroes = response.data.results;
      return heroes? heroes :[];
      // guardar cookie en localstorage.
    })
    .catch((error) => {
      alert("Ha ocurrido un error: " + error);
      console.log(error);
      return "";
    });
}

// export function logout() {

// }
