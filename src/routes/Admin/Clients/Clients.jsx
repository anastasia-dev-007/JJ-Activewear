import { useEffect, useState } from "react";
import { getUsers } from "../../../users.service";

export default function Clients() {
    //sa memorez ca pentru a chema datele din baza de date de pe service trebuie sa creez in acel service o functie like:
    //     export const getUsers = () => {
    //     return users;}
    //apoi sa creez in component un useState care va pastra aceste date si un useEffect care va chema functia getSomething salvat in const data, iar apoi setSomething va fi actualizat cu acest data setUsers(data).

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const data = getUsers();
        setUsers(data);
    }, [])
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Client ID</th>
                    <th scope="col">Registration date</th>
                    <th scope="col">Name Surname</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Birthday</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(item => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>cell 1</td>
                            <td>{item.nameSurname}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.email}</td>
                            <td>{item.birthday}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}