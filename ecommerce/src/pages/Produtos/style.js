import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    margin: 40px 0px;
`

export const ProdutosWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
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