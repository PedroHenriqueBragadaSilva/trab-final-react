import styled from 'styled-components'

export const Foot = styled.footer`
    background-color: #202122;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

h3{
    padding: 5px;
    padding-left: 80px;
    color: #ffffff;
}

img{
    width: 30px;
}
`

export const FootList = styled.ul`
    display: flex;
    gap: 60px;
    list-style: none;
    justify-content: flex-end;
    padding-right: 80px;

a{
    color: #ffffff;
}
`