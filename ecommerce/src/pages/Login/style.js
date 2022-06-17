import styled from 'styled-components'


export const MainLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;

    width: 100vw;
    height: 100vh;

    background-color: #333333;

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

    background-color: #666666;
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
        margin-top: 1.4rem;
        border: none;
        border-radius: 20px;
        padding: .8rem;

        &:hover{
            background-color: black;
            color: white;
            cursor: pointer;
        }
    }
`