'use client'
import { useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useUsers } from "../context/UsersContext";


const IconDelete = ({id})=> {
    const [isHoverDelete, setIsHoverDelete] = useState(false)
    const {deleteUser} = useUsers()

    const handleIconDelete = ()=> {
        deleteUser(id)
    }

    return (
        <div className="" style={{ 
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: isHoverDelete ? 'gray': 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
        }} 
        onMouseEnter={()=> setIsHoverDelete(true)} 
        onMouseLeave={()=> setIsHoverDelete(false)}
        onClick={handleIconDelete}
        >

            <BsFillTrash3Fill />
        </div>
    )


}

export default IconDelete