'use client'
import { useState } from "react";
import { BsFillBrushFill } from "react-icons/bs";
import { useUsers } from "../context/UsersContext";

const IconEdit = ({user})=> {
    const [isHoverEdit, setIsHoverEdit] = useState(false)
    const { setUser } = useUsers()

    const handleIconEdit = ()=> {
    
        setUser(user)
    }
    

    return (
        <div className="" style={{ 
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: isHoverEdit ? 'gray': 'transparent',
            display: 'flex',
            alignItems: 'center',
            marginRight: '5%',
            justifyContent: 'center',
            cursor: 'pointer'
        }} 
        onMouseEnter={()=> setIsHoverEdit(true)} 
        onMouseLeave={()=> setIsHoverEdit(false)}
        onClick={handleIconEdit}
        >
            <BsFillBrushFill />
        </div>
    )


}

export default IconEdit