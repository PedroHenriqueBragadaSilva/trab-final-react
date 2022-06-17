import { Head, NavBar, NavList } from "./style"
import { Link } from "react-router-dom"
import logo from '../../images/logo.png'

export const Header = () => {
    return (
        <Head>
            <NavBar>
                <Link to='/'><img src={logo} alt="logo" /></Link>
                
                <NavList>
                    <li><Link to='/produtos'>Produtos</Link></li>
                    <li><Link to='/cadastro'>Cadastro</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                    {/*<li>Perfil</li>*/}
                </NavList>
            </NavBar>
        </Head>
    )
}