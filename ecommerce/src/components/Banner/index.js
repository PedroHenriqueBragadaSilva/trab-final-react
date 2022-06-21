import { Link } from "react-router-dom"
import banner from '../../images/banner.png'
import { Imagem } from "./style"

export const Banner = () => {

//TODO alterar rota
return (
    <Link to='/produtos'><Imagem src={banner} alt="banner promocao" /></Link>
)
}