import { useContext, useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { API } from "../../services/api"
import { ProdutoCard } from "../../components/ProdutoCard"
import { ButtonWrapper, CategoriaEsp, CategoriasWrapper, ProdutoSection, ProdutosWrapper, Wrapper } from "./style"
import { Footer } from "../../components/Footer"
import { DataContext } from "../../context/data"
import { useHistory } from "react-router-dom"

export const Produtos = () => {
    const [data, setData] = useState()
    const [dataFilter, setDataFilter] = useState()
    const [categoriaData, setCategoriaData] = useState()
    const {role} = useContext(DataContext)
    const history = useHistory()
    const [catNome, setCatNome] = useState()
    const {token} = useContext(DataContext)

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
        setCatNome(nome)
    }

    const handleDeleteSubmit = async (e) => {
        e.preventDefault()

        const delInfo = categoriaData.filter((item) => item.nome === catNome)

        try {
            await API.delete(`/categoria/${delInfo[0].id}`, {headers: {
                Authorization: `Bearer ${token}`
            }})
        } catch (error) {
            console.log('erro')
        }

        window.location.reload()
    }

    const handleCatUpdate = (catNome) => {
        const info = categoriaData.filter((item) => item.nome === catNome)
        history.push(`/categoria/${info[0].id}`)
    }

    return (
        <>
            <Header />

            <Wrapper>
                <CategoriasWrapper>
                    <h2>Categorias</h2>
                    <button onClick={() => {setDataFilter(data); setCatNome()}}>Todos</button>
                    {categoriaData?.map(categoria => <button onClick={() => handleCategoria(categoria.nome)} key={categoria.id}>{categoria.nome}</button>)}
                    
                    {role === "funcionario" &&
                    <button onClick={() => history.push("/create/categoria")}>+</button>}
                </CategoriasWrapper>

                <ProdutoSection>
                    {catNome &&
                    <CategoriaEsp>
                        <h1>Categoria: {catNome}</h1>
                        {role === "funcionario" &&
                        <ButtonWrapper>
                            <button onClick={handleDeleteSubmit}>Remover</button>
                            <button onClick={() => handleCatUpdate(catNome)}>Editar</button>
                        </ButtonWrapper>}
                    </CategoriaEsp>}
                    
                    <ProdutosWrapper>
                        {dataFilter?.map(produto => <ProdutoCard id={produto.id} key={produto.id} nome={produto.nome} preco={produto.preco} imagem={produto.imagemUrl}/>)}
                    </ProdutosWrapper>
                </ProdutoSection>
            </Wrapper>

            <Footer />
        </>
    )
}