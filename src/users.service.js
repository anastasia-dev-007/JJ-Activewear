const users = [
    {
        id: 1,
        surname: 'admin',
        phoneNumber: 37367890987,
        birthDate: new Date(),
        email: 'admin@admin.com',
        password: 'admin',
    }
];

//Functia findUserByEmailAndPassword trebuie sa fie apelata cand dam click pe Login, ea ne gaseste acest user in baza de date
export function findUserByEmailAndPassword(email, password) {
    return users.find(user => user.email === email && user.password === password);
}

export const registerUser = (newUser, setUsers) => {
    // Input validation
    if (!newUser.email || !newUser.password) {
        // Handle validation error (e.g., display a message to the user)
        return;
    }

    setUsers((prevUsers) => [...prevUsers, newUser]);
};

export const loginUser = (email, password, users, setUser) => {
    // Input validation
    if (!email || !password) {
        // Handle validation error
        return;
    }

    const foundUser = users.find((u) => u.email === email && u.password === password);

    if (foundUser) {
        setUser(foundUser);
    } else {
        // Handle user not found or incorrect password
    }
};

export const logoutUser = (setUser) => {
    setUser(null);
};
