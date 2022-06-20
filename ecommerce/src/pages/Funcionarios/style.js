import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;

    margin: 50px 0px;
`

export const ContentWrapper = styled.div`
    width: 80%;
`

export const CriaButton = styled.button`
        padding: 0.7rem;
        height: 120px;
        margin-bottom: 30px;
        width: 100%;
        border: none;
        border-radius: 20px;
        background-color: white;
        box-shadow: 0px 5px 10px #00000099;

        &:hover{
            background-color: #efefef;
            cursor: pointer;
        }
`