"use client"


import UserGrid from "../../../components/UserGrid"
import { useUsers } from "../../../context/UsersContext"

const UsersPage = ()=> {

    const {users} = useUsers()
    

    return (
        <div>
            <UserGrid users={users}/>
        </div>
    )
}

export default UsersPage