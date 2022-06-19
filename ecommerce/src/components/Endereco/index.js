import { Wrapper } from "./style"

export const Endereco = (props) => {
    return (
        <Wrapper>
            <div>
                <h2>CEP:</h2>
                <p>{props.cep}</p>
            </div>

            <div>
                <button>Editar</button>
                <button>Excluir</button>
            </div>
        </Wrapper>
    )
}