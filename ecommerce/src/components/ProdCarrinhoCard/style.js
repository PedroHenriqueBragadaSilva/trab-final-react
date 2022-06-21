import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 80%;
    padding: 1rem;
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: 0px 5px 5px #00000099;
    box-sizing: border-box;

    button{
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        border: none;
        box-shadow: 0px 2px 2px #00000099;
        background-color: #eeeeff;
        
        &:hover{
            cursor: pointer;
            background-color: #ccccdd;
        }
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    gap: 60px;
`