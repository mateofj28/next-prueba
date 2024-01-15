'use client'

import { useRouter } from 'next/navigation';
import UserItemTable from './UserItemTable';
import FormEditUser from './ModalEditUser';


const UserGrid = ({users}) => {

    
    const router = useRouter()

    const onBack = () => {
        router.back()
    }


    return (
        <>
            <div className="flex items-center justify-around">
                <button onClick={()=> onBack()} className="py-2 px-6 rounded-lg bg-blue-600 hover:bg-blue-700  font-bold text-white" style={{ marginTop: 10, marginLeft: 5}}>Regresar</button>
               
            </div>
            
            <div className="flex items-start justify-around h-screen" style={{marginTop: '5%'}}>

                <div>
                    <h1 className="font-semibold text-lg">Consulta de Usaurios:</h1>
                    <table>
                        <thead>
                            <tr>
                                <th className="px-4 py-2" style={{ backgroundColor: 'lightgray', color: 'gray' }}>ID</th>
                                <th className="px-4 py-2" style={{ backgroundColor: 'lightgray', color: 'gray' }}>Nombre</th>
                                <th className="px-4 py-2" style={{ backgroundColor: 'lightgray', color: 'gray' }}>Fecha de Nacimiento</th>
                                <th className="px-4 py-2" style={{ backgroundColor: 'lightgray', color: 'gray' }}>Genero</th>
                                <th className="px-4 py-2" style={{ backgroundColor: 'lightgray', color: 'gray' }}>Acciones</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <UserItemTable user={user} />
                            ))}
                        </tbody>
                    </table>
                </div>

                <FormEditUser />

            </div>

            
        </>

    )
}

export default UserGrid