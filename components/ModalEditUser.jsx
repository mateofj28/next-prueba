"use client"

import { useState } from "react";
import { useUsers } from "../context/UsersContext";


const FormEditUser = () => {

    
    const { user, setUser, updateUser } = useUsers()
    const [isHoverEdit, setIsHoverEdit] = useState(false)

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUser({ ...user, [id]: value });
    };

    return (
        <div className="pl-5 w-60">

            <h1 className="font-semibold text-lg">Editando usuario:</h1>

            <div className="mb-3 mt-6">
                <input className="p-2 rounded-lg" type="text" id="name" placeholder="Nombre:" value={user.name} onChange={(e) => handleInputChange(e)} />
            </div>
            <div className="mb-3">
                <input className="w-full p-2 rounded-lg" type="date" id="birthday" value={user.birthday} onChange={(e) => handleInputChange(e)} />
            </div>
            <div>
                <label>Genero:</label><br />
                <select className="w-full p-2 rounded-lg" value={user.gender} id="gender" onChange={(e) => handleInputChange(e)}>
                    <option value="">Seleccionar genero</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">femenino</option>
                </select>
            </div>
            <div className="flex justify-center">
                <button 
                    
                    className="py-2 px-6 rounded-lg font-bold text-black" 
                    style={{ 
                        marginTop: 10, 
                        marginLeft: 5, 
                        backgroundColor: isHoverEdit ? 'rgba(204, 204, 0, 0.8)' : 'yellow' 
                    }} 
                    onMouseEnter={()=> setIsHoverEdit(true)} 
                    onMouseLeave={()=> setIsHoverEdit(false)}
                    onClick={()=> {
                        updateUser(user.id, user)
                        setUser({id: 0, name: "", birthday: "", gender: ""})
                    }}
                >
                    Actualizar
                </button>
            </div>
        </div>
    )

}

export default FormEditUser