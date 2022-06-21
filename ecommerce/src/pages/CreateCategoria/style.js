import styled from 'styled-components'


export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CategoriaSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    text-align: center;
`

export const CategoriaForm = styled.form`
    display: flex;
    flex-direction: column;

    input{
        margin: .5rem 0;
        padding: .4rem 0;
        font-size: 1.2rem;
    }

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
    gap: 15px;

    button{
        width: 100%;
    }
`