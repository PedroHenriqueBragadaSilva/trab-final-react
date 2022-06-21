import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { API } from "../../services/api"
import { ButtonWrapper, ErrorMsg, Form, MainCadastro } from "./style"
import { DataContext } from "../../context/data"

export const AddFuncionario = () => {
    const [section, setSection] = useState(false)
    const history = useHistory()
    const [error, setError] = useState()
    const {token} = useContext(DataContext)

    const [data, setData] = useState({
        username: "",
        email: "",
        senha: "",
        nome: "",
        cpf: "",
        telefone: "",
        dataNascimento: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            await API.post('/funcionario', data, {headers: {
                Authorization: `Bearer ${token}`
            }})
            history.goBack()
        } catch (error) {
            setError(error.response.headers.errormsg)
        }
    }

    return (
        <MainCadastro>
            <h1>Criar Funcionário</h1>
            {!section &&
            <Form>
                <input onChange={(e) => setData({...data, username: e.target.value})} type="text" placeholder="username"/>
                <input onChange={(e) => setData({...data, email: e.target.value})} type="email" placeholder="email"/>
                <input onChange={(e) => setData({...data, senha: e.target.value})} type="password" placeholder="senha"/>

                <ButtonWrapper>
                    <button onClick={() => history.push('/funcionarios')}>Cancelar</button>
                    <button onClick={() => setSection(true)}>Avançar</button>
                </ButtonWrapper>
            </Form>}


            {error && section &&
            <ErrorMsg>
                <p>{error}</p>
            </ErrorMsg>}

            {section &&
            <Form onSubmit={handleSubmit}>
                <input onChange={(e) => setData({...data, nome: e.target.value})} type="text" placeholder="nome"/>
                <input onChange={(e) => setData({...data, cpf: e.target.value})} type="text" placeholder="cpf"/>
                <input onChange={(e) => setData({...data, telefone: e.target.value})} type="text" placeholder="telefone"/>
                <input onChange={(e) => setData({...data, dataNascimento: e.target.value})} type="date" placeholder="data de nascimento"/>

                <ButtonWrapper>
                    <button onClick={() => setSection(false)}>Voltar</button>
                    <button type='submit'>Finalizar</button>
                </ButtonWrapper>
            </Form>}
        </MainCadastro>
    )
}