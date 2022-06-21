import { useContext } from "react"
import { Header } from "../../components/Header"
import { ProdCarrinhoCard } from "../../components/ProdCarrinhoCard"
import { DataContext } from "../../context/data"
import { Button, Wrapper } from "./style"

export const Carrinho = () => {
    const {carrinho} = useContext(DataContext)

    const handleComprar = () => {
        localStorage.removeItem("Carrinho")
    }

    return (
        <div>
            <Header />
            <Wrapper>
                {carrinho.map(item => <ProdCarrinhoCard nome={item.nome} preco={item.preco}/>)}
                <Button onClick={handleComprar}>Comprar</Button>
            </Wrapper>
        </div>
    )
}