import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { API } from "../../services/api"
import { ProdutoCard } from "../../components/ProdutoCard"
import { CategoriasWrapper, ProdutosWrapper, Wrapper } from "./style"
import { Footer } from "../../components/Footer"

export const Produtos = () => {
    const [data, setData] = useState()
    const [dataFilter, setDataFilter] = useState()
    const [categoriaData, setCategoriaData] = useState()

    useEffect(() => {
        const getProdutoData = async () => {
            try {
                const response = await API.get(`/produto`)
                setData(response.data)
                setDataFilter(response.data)
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

    const handleCategoria = (nome) => {
        setDataFilter(data.filter((item) => item.categoriaNome === nome)) 
    }

    return (
        <>
            <Header />

            <Wrapper>
                <CategoriasWrapper>
                    <h2>Categorias</h2>
                    <button onClick={() => setDataFilter(data)}>Todos</button>
                    {categoriaData?.map(categoria => <button onClick={() => handleCategoria(categoria.nome)} key={categoria.id}>{categoria.nome}</button>)}
                </CategoriasWrapper>
                <ProdutosWrapper>
                    {dataFilter?.map(produto => <ProdutoCard id={produto.id} key={produto.id} nome={produto.nome} preco={produto.preco} imagem={produto.imagemUrl}/>)}
                </ProdutosWrapper>
            </Wrapper>

            <Footer />
        </>
    )
}