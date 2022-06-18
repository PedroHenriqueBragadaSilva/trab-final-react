import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../context/data"
import { API } from "../../services/api"
import { Header } from "../../components/Header"

export const Perfil = () => {

    const {id, role, token} = useContext(DataContext)
    const [data, setData] = useState()

    
    useEffect(() => {
        const getUserData = async () => {
    
            try {
                const response = await API.get(`/${role}/${id}`, {headers: {
                    Authorization: `Bearer ${token}`
                }})
                setData(response.data)
    
            } catch (error) {
                console.log(error.response.status)
            }
        }
        getUserData()
    }, [id, role, token])

    return (
        <div>
            <Header />
            <h1>{data?.usuario.username}</h1>
        </div>
    )
}