import React, { createContext, useState } from 'react';

export const UserContext = createContext({
  user: null,
  login: () => { },
  logout: () => { },
});

export function UserProvider(props) {
  const [user, setUser] = useState(null);

  // Function to validate login credentials
  const login = (user) => {
    setUser(user);//aici setam userul exitent din state
  };

  const logout = () => {
    setUser(null); //aici setam utilizatorul null
  };

  return (
    <UserContext.Provider
      value={{
        user: user,
        login: login,
        logout: logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
