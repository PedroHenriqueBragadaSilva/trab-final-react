import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { API } from "../../services/api"
import { InfoWrapper, Wrapper } from "./style"
import { Footer } from "../../components/Footer"
import { DataContext } from "../../context/data"

export const ProdutoEspecifico = () => {
    const {id} = useParams()
    const {carrinho, handleSetCarrinho} = useContext(DataContext)
    const [data, setData] = useState()
    const [carrinhoMsg, setCarrinhoMsg] = useState("Adicionar no carrinho")

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await API.get(`/produto/${id}`)
                setData(response.data)
            } catch (error) {
                console.log(error.response.status)
            }
        }
        getUserData()
    }, [id])

    const handleAddCarrinho = () => {
        handleSetCarrinho([...carrinho, data])
        localStorage.setItem("Carrinho", JSON.stringify([...carrinho, data]))
        setCarrinhoMsg("Adicionado")
    }

    return (
        <div>
            <Header />
            
            <Wrapper>
                <img src={data?.imagemUrl} alt="" />
                <InfoWrapper>
                    <h1>{data?.nome}</h1>
                    <p>{data?.descricao}</p>
                    <p>R${data?.preco}</p>
                    <p>Quantidade em estoque: {data?.qntEstoque}</p>
                    <button onClick={handleAddCarrinho}>{carrinhoMsg}</button>
                </InfoWrapper>
            </Wrapper>

            <Footer />
        </div>
    )
}