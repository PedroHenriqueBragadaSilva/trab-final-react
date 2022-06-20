import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { DataContext } from "../../context/data"
import { API } from "../../services/api"
import { ButtonWrapper, Form, Wrapper } from "./style"

export const EditEndereco = () => {
    const {id} = useParams()
    const {token} = useContext(DataContext)
    const [update, setUpdate] = useState()
    const [data, setData] = useState()
    const history = useHistory()
    
    
    useEffect(() => {
        const getEnderecoData = async () => {
            
            if(token) {
                try {
                    const response = await API.get(`/endereco/${id}`, {headers: {
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

    const handleUpdateEndereco = async (e) => {
        e.preventDefault()

        try {
            await API.put(`/endereco/${id}`, update, {headers: {
                Authorization: `Bearer ${token}`
            }})
        } catch (error) {
            console.log(error.response.status)
        }

        history.push('/perfil')
    }

    return (
        <Wrapper>
            <Form onSubmit={handleUpdateEndereco}>
                <label>CEP:</label>
                <input onChange={(e) => setUpdate({...update, cep: e.target.value})} type="text" placeholder={data?.cep}/>

                <label>Número:</label>
                <input onChange={(e) => setUpdate({...update, numero: e.target.value})} type="text" placeholder={data?.numero} />

                <label>Complemento:</label>
                <input onChange={(e) => setUpdate({...update, complemento: e.target.value})} type="text" placeholder={data?.complemento} />

                <ButtonWrapper>
                    <button>Cancelar</button>
                    <button type="submit">Atualizar</button>
                </ButtonWrapper>
            </Form>
        </Wrapper>
    )
}