import styled from 'styled-components'

export const Head = styled.header`
    background-color: #202122;
`

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90%;
    margin: auto;
    padding: 20px;

    img{
        width: 50px;
    }
`

export const NavList = styled.ul`
    display: flex;
    gap: 40px;
    list-style: none;

    a{
        padding: 10px;
        border-radius: 15%;
        text-decoration: none;
        color: #ffffff;

        &:hover{
            border: 1px solid white;
        }
    }
`