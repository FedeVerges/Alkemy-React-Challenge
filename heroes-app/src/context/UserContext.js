import React, { useState } from "react";

const UserContext = React.createContext();

export function UserContextProvider({ children }) {
  const [token, setToken] = useState(null);

  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
