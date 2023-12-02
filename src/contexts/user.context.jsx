import React, { createContext, useState } from 'react'

export const UserContext = createContext ({
    user: null,
    setUser: () => {},
});

export function UserProvider(props) {
 const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value = {{
            user: user, //short cut - este posibil de scris doar "user" in loc de user: user, caci prop===value. Cand lasam doar numele proprietatii el va avea si proprietatea si valoarea acesteia
            setUser: setUser,
        }}>
            {props.children}
        </UserContext.Provider>
    );
}