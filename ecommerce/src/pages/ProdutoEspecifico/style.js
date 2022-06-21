import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 80px auto;
`

export const InfoWrapper = styled.div`
    width: 40%;

    button{
        width: 50%;
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