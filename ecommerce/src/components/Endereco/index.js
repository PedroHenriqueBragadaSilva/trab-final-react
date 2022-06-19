import { useHistory } from "react-router-dom"
import { Wrapper } from "./style"

export const Endereco = (props) => {
    const history = useHistory()

    return (
        <Wrapper>
            <div>
                <h2>CEP:</h2>
                <p>{props.cep}</p>
            </div>

            <div>
                <button onClick={() => history.push(`/endereco/${props.id}`)}>Editar</button>
                <button onClick={props.onClickDel}>Excluir</button>
            </div>
        </Wrapper>
    )
}