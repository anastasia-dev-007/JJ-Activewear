export const users = [
    {
        id: 1,
        role: 'admin',
        nameSurname: 'admin',
        phoneNumber: 37367890987,
        birthDate: new Date(),
        email: 'admin@admin.com',
        password: 'admin',
    }
];

//Functia findUserByEmailAndPassword trebuie sa fie apelata cand dam click pe Login, ea ne gaseste acest user in baza de date
export function findUserByEmailAndPassword(email, password) {
    return users.find(user => user.email === email && user.password === password);
};

export const saveUser = (user) => {
    //cand cineva se inregistreaza trebuie sa il adaug in baza de date ca un obiect

    //trebuie sa verific daca userul si email exista deja si sa arunc o eroare, else sa ii fac push
    const userExists = users.some(item => item.email === user.email)//verificam daca cel putin un utilizator cu asa username/email exista

    if (userExists) {
    //    alert('User exists');//aceatsa va fi o errore
    return null;
    } else {
        users.push(user);
        return user;
    }
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
