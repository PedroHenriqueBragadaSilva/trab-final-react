import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 10px 40px #00000099;
    border-radius: 20px;
    padding: 20px;
    width: 50%;

    label{
        margin-top: 20px;
    }

    input{
        margin: .5rem 0;
        padding: .4rem 0;
        font-size: 1.2rem;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid gray;
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