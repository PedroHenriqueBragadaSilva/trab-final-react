import styled from 'styled-components'

export const ProfileWrapper = styled.div`
    display: flex;
    justify-content: start;
    gap: 2rem;
    width: 90vw;
    height: 100vh;
    margin: 40px auto;
`

export const ProfileNav = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    background-color: #202122;

    button{
        padding: 20px;
        background-color: #202122;
        color: white;
        border: none;

        &:hover{
            background-color: #00000055;
            cursor: pointer;
        }
    }
`

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

export const DelSection = styled.div`

    button{
        width: 100%;
        margin-top: 3.6rem;
        padding: 0.7rem;
        border: none;
        border-radius: 20px;
        background-color: #bdb9b9;
        box-shadow: 0px 5px 10px #00000099;

        &:hover{
            background-color: #ff2222;
            color: white;
            cursor: pointer;
        }
    }
`

export const EnderecoSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
`

export const EnderecoButton = styled.button`
        padding: 0.7rem;
        height: 120px;
        border: none;
        border-radius: 20px;
        background-color: white;
        box-shadow: 0px 5px 10px #00000099;

        &:hover{
            background-color: #efefef;
            cursor: pointer;
        }
`

export const EnderecoForm = styled.form`
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

export const Unc = styled.div`
    margin: .5rem 0;
    padding: 0px 10px;
    font-size: 0.8rem;
    border: 1px solid gray;
`