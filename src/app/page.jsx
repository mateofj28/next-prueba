
"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useUsers } from "../../context/UsersContext"


const HomePage = () => {

    const { createUser } = useUsers()
    const router = useRouter()
    
    


    const [userData, setUserData] = useState({
        id: 0,
        name: '',
        birthday: '',
        gender: ''
    });



    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUserData({ ...userData, [id]: value });
    };
      
    const handleSeeUser = ()=> {
        router.push('/users')
    }


    const handleSaveUser = ()=> {
        
        
        if (userData.name !== "" || userData.birthday !== "" || userData.gender !== "" ){
        
            createUser(userData.name, userData.birthday, userData.gender)
            alert("El usuario se agrego a la lista");
            setUserData({id: 0, name: '', birthday: '', gender: ''})
            
        } else {
            alert("Debes completar todos los campos para registrar el usuario.")
        }

    }

    return (
        <div className="flex  items-center justify-around h-screen">

            <div>
                <h1 className="text-5xl font-bold">FaceUsers</h1>
                <p className="w-64 mt-3">Crea una cuenta para que puedas disfrutar de los beneficios de la pagina.</p>
                
                <button className="py-2 px-6 rounded-lg bg-green-600 hover:bg-green-700 font-bold text-white mt-6 w-full" onClick={handleSeeUser}>Ver usuarios</button>
                
            </div>

            <div className="w-64 h-80 bg-gray-100 rounded-xl text-black flex justify-center ">
                <div>
                    <div className="flex justify-center mt-3 font-bold"><h1>Registro de usuario</h1></div>
                    

                    <div className="mb-3 mt-6">
                        <input className="p-2 rounded-lg" type="text" id="name" placeholder="Nombre:" value={userData.name} onChange={(e)=> handleInputChange(e)} />
                    </div>
                    <div className="mb-3">
                        <input className="w-full p-2 rounded-lg" type="date" id="birthday" value={userData.birthday} onChange={(e)=> handleInputChange(e)} />
                    </div>
                    <div>
                        <label>Genero:</label><br />
                        <select className="w-full p-2 rounded-lg" value={userData.gender} id="gender" onChange={(e)=> handleInputChange(e)}>
                            <option value="">Seleccionar genero</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">femenino</option>
                        </select>
                    </div>
                    <button onClick={()=> handleSaveUser()} className="py-2 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 font-bold text-white mt-6 w-full">Agregar</button>
                </div>
            </div>

        </div>
    )

}

export default HomePage;
    
