"use client"
// componente para repartir informacion a las paginas
// a las paginas que necesiten.


import { createContext, useContext, useState } from "react";

// crear el contexto
export const UserContext = createContext();

export const useUsers = () => {
    const context = useContext(UserContext)
    return context
}

// crear el componente contexto
// mandar los datos
// children son todas la paginas que van
// a poner recoger esos datos
// exportarlo para poderlo utilizar
// lo siguiente sera anadirlo en todas las paginas (layout)
export const UsersProvider = ({children})=> {

    const [users, setUsers] = useState([
        {id: 0, name: "Sebastian", birthday: "2024-01-26", gender: "masculino"},
        {id: 1, name: "Gestavo", birthday: "2024-01-27", gender: "masculino"},
        {id: 2, name: "Carlos", birthday: "2024-01-28", gender: "masculino"},
        {id: 3, name: "Aleja", birthday: "2024-01-29", gender: "femenino"}
    ])

    const [user, setUser] = useState(
        {id: 0, name: "", birthday: "", gender: ""},  
    )


    const createUser = (name, birthday, gender) => {
        
        setUsers([...users, {
            id: users.length,
            name: name,
            birthday: birthday,
            gender: gender,
        }])
    }

    const updateUser = (id, newUser) => setUsers([...users.map((user) => user.id === id ? {...user, ...newUser}: user)])

    const deleteUser = (id) => setUsers([...users.filter((user) => user.id !== id)])
    

    return (
        <UserContext.Provider value={{
            users,
            createUser, 
            updateUser,
            deleteUser,
            user,
            setUser
        }}>
        {children}
        </UserContext.Provider>
    )
}