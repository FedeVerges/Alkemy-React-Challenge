import UserContext from "../context/UserContext";
import React, { useCallback, useContext, useState } from "react";
import { login as loginUser } from "../services/alkemy_api";

export default function useUser() {
  const { token, setToken } = useContext(UserContext);
  const [loginState, setLoginState] = useState({
    loading: false,
    error: false,
  });

  const login = useCallback(
    (values) => {
      setLoginState({ loading: true, error: false });
      loginUser(values.email, values.password)
        .then((token) => {
          if (token !== "" && token !== null) {
            setLoginState({ loading: false, error: false });
            localStorage.setItem("SessionId", token);
            console.log(token);
            setToken(token);
          } else {
            setLoginState({
              loading: false,
              error: true,
            });
            setToken("");
          }
        })
        .catch((error) => {
          setLoginState({
            loading: false,
            error: true,
          });
        });
    },
    [setToken]
  );

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem("SessionId");
  }, [setToken]);

  const updateToken = () => {
    let token = localStorage.getItem("SessionId");
    setToken(token);
  };

  return {
    isLogged: token !== "" && token !== null,
    loading: loginState.loading,
    error: loginState.error,
    login,
    logout,
    updateToken,
  };
}
