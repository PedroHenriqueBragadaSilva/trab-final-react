import { useState } from "react"
import { InfoWrapper, Wrapper } from "./style"

export const ProdCarrinhoCard = (props) => {
    const [qnt, setQnt] = useState()

    return (
        <Wrapper>
            <div>
                <h2>Nome:</h2>
                <p>{props.nome}</p>
            </div>
            <div>
                <h2>Quantidade:</h2>
                <input onChange={(e) => setQnt(e.target.value)} type="number" />
            </div>
            <InfoWrapper>
                <div>
                    <h2>Preco unitário:</h2>
                    <p>R${props.preco}</p>
                </div>
                <div>
                    <h2>Preco total:</h2>
                    <p>R${props.preco * qnt}</p>
                </div>
            </InfoWrapper>
            <button>Remover</button>
        </Wrapper>
    )
}