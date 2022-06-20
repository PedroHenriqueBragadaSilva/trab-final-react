import styled from 'styled-components'

export const MainLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
    background-color: #e9e6e6;

    width: 100vw;
    height: 100vh;

    img{
        width: 25vw;
        max-width: 300px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 25vw;
    height: 45%;
    min-width: 250px;
    max-width: 400px;
    padding: 45px;
    border-radius: 10%;

    background-color: #dddddd;
    box-shadow: 0px 10px 40px #00000099;

    h1{
        text-align: center;
        font-size: 2rem;
    }

    input{
        border: none;
        border-radius: 20px;
        margin: .5rem;
        padding: .8rem;
        background-color: #cccccc;
        font-size: 1.2rem;
    }

    button{
        width: 100%;
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
`

export const ErrorMsg = styled.div`
    text-align: center;

    background-color: #ff404080;
    border-radius: 20px;
`