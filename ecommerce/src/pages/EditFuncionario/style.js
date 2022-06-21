import styled from 'styled-components'


export const ProfileSection = styled.form`
    display: flex;
    flex-direction: column;

    width: 50%;

    label{
        margin-top: 30px;
    }

    input{
        margin: .5rem 0;
        padding: .4rem 0;
        font-size: 1.2rem;
    }

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

export const SectionWrapper = styled.div`
    display: flex;
    gap: 30px;
    width: 65vw;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
`

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 30px;
`