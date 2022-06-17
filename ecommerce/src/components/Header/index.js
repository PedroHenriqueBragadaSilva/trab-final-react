import { Head, NavBar, NavList } from "./style"
import { Link } from "react-router-dom"
import logo from '../../images/logo.png'
import carrinho from '../../images/carrinho.jpg'
import { useContext } from "react"
import { DataContext } from "../../context/data"

export const Header = () => {
    const {token} = useContext(DataContext)

    return (
        <Head>
            <NavBar>
                <Link to='/'><img src={logo} alt="logo" /></Link>
                
                <NavList>
                    <li><Link to='/produtos'>Produtos</Link></li>
                    {!token && <li><Link to='/cadastro'>Cadastro</Link></li>}
                    {!token && <li><Link to={'/login'}>Login</Link></li>}
                    {token && <li><Link to={'/perfil'}>Perfil</Link></li>}
                    {token && <li><Link to={'/logout'}>Logout</Link></li>}
                    <li><Link to={'/carrinho'}><img src={carrinho} alt="carrinho" /></Link></li>
                </NavList>
            </NavBar>
        </Head>
    )
}