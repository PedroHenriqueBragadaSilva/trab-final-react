import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    margin: 40px 0px;
`

export const ProdutosWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 50px 0px;
`

export const CategoriasWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    background-color: #202122;
    color: white;
    text-align: center;
    height: 100vh;

    button{
        padding: 20px;
        background-color: #202122;
        color: white;
        border: none;

        &:hover{
            background-color: #00000055;
            cursor: pointer;
        }
    }
`

export const CategoriaEsp = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 10px;

    border: 1px solid gray;
    
    button{
        margin-top: 3.6rem;
        padding: 0.7rem;
        border: none;
        border-radius: 20px;
        background-color: #bdb9b9;
        box-shadow: 0px 5px 10px #00000099;

        &:hover{
            background-color: black;
            color: white;
            cursor: pointer;
        }
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 20px;
`

export const ProdutoSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0px 40px;
`