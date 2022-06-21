import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { API } from "../../services/api"
import { ProdutoCard } from "../../components/ProdutoCard"
import { CategoriasWrapper, ProdutosWrapper, Wrapper } from "./style"

export const Produtos = () => {
    const [data, setData] = useState()
    const [categoriaData, setCategoriaData] = useState()

    useEffect(() => {
        const getProdutoData = async () => {
            try {
                const response = await API.get(`/produto`)
                setData(response.data)
            } catch (error) {
                console.log(error.response.status)
            }
        }

        const getCategoriaData = async () => {
            try {
                const response = await API.get(`/categoria`)
                setCategoriaData(response.data)
            } catch (error) {
                console.log(error.response.status)
            }
        }
        getProdutoData()
        getCategoriaData()
    }, [])

    return (
        <>
            <Header />

            <Wrapper>
                <CategoriasWrapper>
                    <h2>Categorias</h2>
                    {categoriaData?.map(categoria => <button>{categoria.nome}</button>)}
                </CategoriasWrapper>
                <ProdutosWrapper>
                    {data?.map(produto => <ProdutoCard id={produto.id} key={produto.id} nome={produto.nome} preco={produto.preco} imagem={produto.imagemUrl}/>)}
                </ProdutosWrapper>
            </Wrapper>
        </>
    )
}