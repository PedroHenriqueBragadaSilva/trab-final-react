import { useHistory } from "react-router-dom"
import { InfoWrapper, Wrapper } from "./style"

export const FuncionarioCard = (props) => {
    const history = useHistory()

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
                <button>Excluir</button>
            </div>
        </Wrapper>
    )
}