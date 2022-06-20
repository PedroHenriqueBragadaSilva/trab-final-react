import logo from '../../images/logo.png'
import { ButtonWrapper, ErrorMsg, Form, MainLogin } from './style'
import { useContext, useState } from 'react'
import { API } from '../../services/api'
import { useHistory } from 'react-router-dom'
import { DataContext } from '../../context/data'

export const Login = () => {
    const [loginData, setLoginData] = useState({
        username:'',
        senha:''
    })

    const [error, setError] = useState(false)

    const {handleSetToken} = useContext(DataContext)

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await API.post('/login', loginData)
            handleSetToken(response.headers.authorization)
            localStorage.setItem('Authentication', response.headers.authorization)
            history.push('/')
        } catch (error) {
            setError(true)
        }
    }

    return (
        <MainLogin>
            <img src={logo} alt="" />

            <Form onSubmit={handleSubmit}>

                {error &&
                <ErrorMsg>
                    <p>Credenciais inválidas</p>
                </ErrorMsg>}

                <h1>Login</h1>
                <input onChange={(e) => setLoginData({...loginData, username: e.target.value})} type="text" name="username" placeholder="Username"/>
                <input onChange={(e) => setLoginData({...loginData, senha: e.target.value})} type="password" name="senha" placeholder="Senha"/>

                <ButtonWrapper>
                    <button onClick={() => history.push('/')} type="button">Cancelar</button>
                    <button type='submit'>Entrar</button>
                </ButtonWrapper>
            </Form>
        </MainLogin>
    )
}