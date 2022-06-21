import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { API } from "../../services/api"

export const ProdutoEspecifico = () => {
    const {id} = useParams()
    const [data, setData] = useState()

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await API.get(`/produto/${id}`)
                setData(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error.response.status)
            }
        }
        getUserData()
    }, [id])

    return (
        <div>
            <Header />
            
            <img src={data?.imagemUrl} alt="" />

            <div>
                
            </div>
        </div>
    )
}