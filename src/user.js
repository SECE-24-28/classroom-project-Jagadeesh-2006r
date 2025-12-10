import { useParams } from "react-router-dom"

function User()
{
    const data =useParams()
    return (
        <>
        <h4>Users {data.id}</h4>
        </>
    )
}

export default User

