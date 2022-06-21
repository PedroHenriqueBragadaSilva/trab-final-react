import { useContext } from "react"
import { DataContext } from "../../context/data"
import { Header } from "../../components/Header"

export const Carrinho = () => {
    const {carrinho} = useContext(DataContext)

    return (
        <div>
            <Header />
            <button onClick={() => localStorage.removeItem("Carrinho")}>limpar</button>
            <div>
                {console.log(carrinho)}
            </div>
        </div>
    )
}