import IconDelete from "./IconDelete"
import IconEdit from "./IconEdit"

const UserItemTable = ({user}) => {

    return (
        <tr key={user.id} className="border-b text-center">
            <td className="px-4 py-2">{user.id}</td>
            <td className="px-4 py-2">{user.name}</td>
            <td className="px-4 py-2">{user.birthday}</td>
            <td className="px-4 py-2">{user.gender}</td>
            <td className="px-2 py-2 flex justify-center">
                <IconEdit user={user}/>
                <IconDelete id={user.id} />
            </td>

        </tr>
    )
}

export default UserItemTable