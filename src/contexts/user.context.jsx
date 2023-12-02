import React, { createContext, useState } from 'react'
import { registerUser, loginUser, logoutUser } from '../users.service';

export const UserContext = createContext ({
    user: null,
    setUser: () => {},
    createUser: () => {},
    loginUser: () => {},
    logoutUser: () => {},
});

export function UserProvider(props) {
 const [user, setUser] = useState(null);
 const [users, setUsers] = useState([]);

 // Function to create a new user
 const createUser = (newUser) => {
    setUsers([...users, newUser]);
    setUser(newUser);
  };

   // Function to validate login credentials
   const loginUser = (email, password) => {
    const foundUser = users.find((u) => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
    } 
  };

  const logoutUser = () => {
    setUser(null);
  };

    return (
        <UserContext.Provider value = {{
            user: user, //short cut - este posibil de scris doar "user" in loc de user: user, caci prop===value. Cand lasam doar numele proprietatii el va avea si proprietatea si valoarea acesteia
            setUser: setUser,
            createUser: createUser,
            loginUser: loginUser,
            logoutUser: logoutUser,
        }}>
            {props.children}
        </UserContext.Provider>
    );
}