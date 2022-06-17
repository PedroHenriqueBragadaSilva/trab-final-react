import logo from '../../images/logo.png'
import { Form, MainLogin } from './style'
import { useContext, useState } from 'react'
import { API } from '../../services/api'
import { useHistory } from 'react-router-dom'
import { DataContext } from '../../context/data'

export const Login = () => {
    const [loginData, setLoginData] = useState({
        username:'',
        senha:''
    })

    const {handleSetToken} = useContext(DataContext)

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await API.post('/login', loginData)
            handleSetToken("Bearer " + response.headers.authorization)
            localStorage.setItem("Authentication", "Bearer " + response.headers.authorization)
            history.goBack()
        } catch (error) {
            alert('credenciais inválidas')
        }
    }

    return (
        <MainLogin>
            <img src={logo} alt="" />

            <Form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input onChange={(e) => setLoginData({...loginData, username: e.target.value})} type="text" name="username" placeholder="Username"/>
                <input onChange={(e) => setLoginData({...loginData, senha: e.target.value})} type="password" name="senha" placeholder="Senha"/>

                <button type='submit'>Entrar</button>
            </Form>
        </MainLogin>
    )
}