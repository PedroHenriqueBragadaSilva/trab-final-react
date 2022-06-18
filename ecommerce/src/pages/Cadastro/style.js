import styled from 'styled-components'

export const MainCadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e9e6e6;

    width: 100vw;
    height: 100vh;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 25vw;
    height: 50%;
    min-width: 250px;
    max-width: 400px;
    min-height: 350px;
    padding: 45px;
    border-radius: 10%;

    background-color: #dddddd;
    box-shadow: 0px 10px 40px #00000099;

    input{
        border: none;
        border-radius: 20px;
        margin: .5rem;
        padding: .8rem;
        background-color: #cccccc;
        font-size: 1.2rem;
    }

    button{
        margin-top: 1.4rem;
        border: none;
        border-radius: 20px;
        padding: .8rem;
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
    
    button{
        flex-grow: 1;
    }
`