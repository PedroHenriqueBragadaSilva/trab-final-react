import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { DataContext } from "../../context/data"
import { API } from "../../services/api"
import { InfoWrapper, Wrapper } from "./style"

export const FuncionarioCard = (props) => {
    const history = useHistory()
    const {token} = useContext(DataContext)

    const handleDeleteSubmit = async (e) => {
        e.preventDefault()

        try {
            await API.delete(`/funcionario/${props.id}`, {headers: {
                Authorization: `Bearer ${token}`
            }})
        } catch (error) {
            console.log('erro')
        }

        window.location.reload()
    }

    return (
        <Wrapper>
            <InfoWrapper>
                <div>
                    <h2>Nome:</h2>
                    <p>{props.nome}</p>
                </div>
                <div>
                    <h2>CPF:</h2>
                    <p>{props.cpf}</p>
                </div>
            </InfoWrapper>

            <div>
                <button onClick={() => history.push(`/edit/funcionario/${props.id}`)}>Editar</button>
                <button onClick={handleDeleteSubmit}>Excluir</button>
            </div>
        </Wrapper>
    )
}