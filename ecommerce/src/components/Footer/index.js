import { Foot, FootList } from "./style"
import { Link } from "react-router-dom"
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"

export const Footer = () => {
    return (
            <Foot>            
                <h3>DE TODOS OS AMORES QUE TIVE, ÉS O MAIS ANTIGO!!</h3>    
                <img src={logo} alt="logo" />
                <FootList>
                    <li><Link to={'www.instagram.com'}><FontAwesomeIcon icon={faInstagram} size="3x" /></Link></li>
                    <li><Link to={'www.facebook.com'}><FontAwesomeIcon icon={faFacebook} size="3x" /></Link></li>
                    <li><Link to={'www.github.com'}><FontAwesomeIcon icon={faGithub} size="3x" /></Link></li>
                </FootList>
            </Foot>
    )
}