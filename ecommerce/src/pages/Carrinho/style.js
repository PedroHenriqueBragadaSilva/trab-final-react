import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0px;

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

export const Button = styled.button`
    width: 80%;
`