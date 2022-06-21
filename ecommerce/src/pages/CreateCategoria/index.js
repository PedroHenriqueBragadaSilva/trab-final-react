import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { DataContext } from "../../context/data"
import { API } from "../../services/api"
import { ButtonWrapper, CategoriaForm, CategoriaSection, Wrapper } from "./style"

export const CreateCategoria = () => {
    const [data, setData] = useState()
    const history = useHistory()
    const {token} = useContext(DataContext)


    const handleCriaCategoria = async (e) => {
        e.preventDefault()

        try {
            await API.post(`/categoria`, data, {headers: {
                Authorization: `Bearer ${token}`
            }})
        } catch (error) {
            console.log('erro')
        }

        history.goBack()
    }

    return (
        <Wrapper>
            <CategoriaSection>
                <h1>Adicionar categoria</h1>
                <CategoriaForm onSubmit={handleCriaCategoria}>
                    <input onChange={(e) => setData({...data, nome: e.target.value})} type="text" placeholder="Nome"/>
                    <input onChange={(e) => setData({...data, descricao: e.target.value})} type="text" placeholder="Descrição"/>
                    <ButtonWrapper>
                        <button type="button" onClick={() => history.goBack()}>Cancelar</button>
                        <button type="submit">Adicionar</button>
                    </ButtonWrapper>
                </CategoriaForm>
            </CategoriaSection>
        </Wrapper>
    )
}