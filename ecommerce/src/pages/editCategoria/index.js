import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { DataContext } from "../../context/data"
import { API } from "../../services/api"
import { ButtonWrapper, Form, Wrapper } from "./style"

export const EditCategoria = () => {
    const {id} = useParams()
    const {token} = useContext(DataContext)
    const [update, setUpdate] = useState()
    const [data, setData] = useState()
    const history = useHistory()
    
    
    useEffect(() => {
        const getEnderecoData = async () => {
            
            if(token) {
                try {
                    const response = await API.get(`/categoria/${id}`, {headers: {
                        Authorization: `Bearer ${token}`
                    }})
                    setData(response.data)
                } catch (error) {
                    console.log('erro')
                }
            }
        }
        getEnderecoData()
    }, [id, token])

    const handleUpdateCategoria = async (e) => {
        e.preventDefault()

        try {
            await API.put(`/categoria/${id}`, update, {headers: {
                Authorization: `Bearer ${token}`
            }})
        } catch (error) {
            console.log(error.response.status)
        }

        history.push('/produtos')
    }

    return (
        <Wrapper>
            <Form onSubmit={handleUpdateCategoria}>
                <label>Nome:</label>
                <input onChange={(e) => setUpdate({...update, nome: e.target.value})} type="text" placeholder={data?.nome}/>

                <label>Descricao:</label>
                <input onChange={(e) => setUpdate({...update, descricao: e.target.value})} type="text" placeholder={data?.descricao} />

                <ButtonWrapper>
                    <button>Cancelar</button>
                    <button type="submit">Atualizar</button>
                </ButtonWrapper>
            </Form>
        </Wrapper>
    )
}