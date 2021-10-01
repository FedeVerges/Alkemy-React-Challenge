import axios from "axios";

export async function login(email,password,URL) {
    return axios.post(URL, {
        email: email,
        password: password,
    })
        .then((response) => {
            const {token= '0'} = response.data;
            console.log(token);
            return token;
            // guardar cookie en localstorage.
        })
        .catch((error) => {
            alert("Ha ocurrido un error: " + error);
            console.log(error);
            return "";
    })
}

export async function getHeroes() {
    
}

// export function logout() {
    
// }
