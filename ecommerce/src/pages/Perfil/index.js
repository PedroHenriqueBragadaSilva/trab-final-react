import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../context/data"
import { API } from "../../services/api"
import { Header } from "../../components/Header"
import { ButtonWrapper, DelSection, EnderecoButton, EnderecoForm, EnderecoSection, ProfileNav, ProfileSection, ProfileWrapper, SectionWrapper, Unc } from "./style"
import { useHistory } from "react-router-dom"
import { Endereco } from "../../components/Endereco"

export const Perfil = () => {

    const {id, role, token} = useContext(DataContext)
    const [data, setData] = useState()
    const [update, setUpdate] = useState()
    const [enderecoData, setEnderecoData] = useState()
    const [section, setSection] = useState(0)

    const history = useHistory()

    
    useEffect(() => {
        const getUserData = async () => {

            if(id && role && token) {
                try {
                    const response = await API.get(`/${role}/${id}`, {headers: {
                        Authorization: `Bearer ${token}`
                    }})
                    setData(response.data)
                } catch (error) {
                    console.log(error.response.status)
                }
            }
        }
        getUserData()
    }, [id, role, token])

    const handleUpdateSubmit = async (e) => {
        e.preventDefault()

        try {
            await API.put(`/${role}/${id}`, update, {headers: {
                Authorization: `Bearer ${token}`
            }})
        } catch (error) {
            console.log('erro')
        }
    }

    const handleDeleteSubmit = async (e) => {
        e.preventDefault()

        try {
            await API.delete(`/${role}/${id}`, {headers: {
                Authorization: `Bearer ${token}`
            }})
        } catch (error) {
            console.log('erro')
        }

        history.push('/')
        localStorage.clear()
        window.location.reload()
    }

    const handleCriaEndereco = async (e) => {
        e.preventDefault()

        try {
            await API.post(`/endereco`, enderecoData, {headers: {
                Authorization: `Bearer ${token}`
            }})
        } catch (error) {
            console.log('erro')
        }

        window.location.reload()
    }

    const handleDelEndereco = async (id) => {

        try {
            await API.delete(`/endereco/${id}`, {headers: {
                Authorization: `Bearer ${token}`
            }})
        } catch (error) {
            console.log('erro')
        }

        window.location.reload()
    }

    return (
        <div>
            <Header />
            
            <ProfileWrapper>
                <ProfileNav>
                    <button onClick={() => setSection(0)}>Mnha conta</button>
                    {role === "cliente" && <button onClick={() => setSection(1)}>Enderecos</button>}
                    <button onClick={() => setSection(3)}>Deletar conta</button>
                </ProfileNav>

                {section === 0 &&
                <div>
                    <h1>Minha Conta</h1>
                    <SectionWrapper>
                        <ProfileSection>
                            <label htmlFor="username">Username</label>
                            <input onChange={(e) => setUpdate({...update, username: e.target.value})} type="text" placeholder={data?.usuario.username}/>

                            <label htmlFor="email">Email</label>
                            <input onChange={(e) => setUpdate({...update, email: e.target.value})} type="email" placeholder={data?.usuario.email}/>

                            <label htmlFor="senha">Senha</label>
                            <input onChange={(e) => setUpdate({...update, senha: e.target.value})} type="password" placeholder=""/>

                            <label htmlFor="nome">Nome</label>
                            <input onChange={(e) => setUpdate({...update, nome: e.target.value})} type="text" placeholder={data?.nome}/>
                        </ProfileSection>
                        <ProfileSection onSubmit={handleUpdateSubmit}>
                            <label htmlFor="cpf">CPF</label>

                            <Unc>
                                <p>{data?.cpf}</p>
                            </Unc>

                            <label htmlFor="telefone">Telefone</label>
                            <input onChange={(e) => setUpdate({...update, telefone: e.target.value})} type="text" placeholder={data?.telefone}/>

                            <label htmlFor="dataNascimento">Data de nascimento</label>
                            <input onChange={(e) => setUpdate({...update, dataNascimento: e.target.value})} type="date" placeholder={data?.dataNascimento} />
                            
                            <button type="submit">Atualizar</button>
                        </ProfileSection>
                    </SectionWrapper>
                </div>}

                {section === 1 &&
                <EnderecoSection>
                    <h1>Enderecos</h1>
                    
                    {data.enderecos.map(endereco => <Endereco key={endereco.id} id={endereco.id} cep={endereco.cep} onClickDel={() => handleDelEndereco(endereco.id)}/>)}
                    <EnderecoButton onClick={() => setSection(2)}>Adicionar endereço</EnderecoButton>
                </EnderecoSection>}

                {section === 2 &&
                <EnderecoSection>
                    <h1>Enderecos</h1>

                    <EnderecoForm onSubmit={handleCriaEndereco}>
                        <input onChange={(e) => setEnderecoData({...enderecoData, cep: e.target.value})} type="text" placeholder="CEP"/>

                        <input onChange={(e) => setEnderecoData({...enderecoData, numero: e.target.value})} type="text" placeholder="Número"/>
                        
                        <input onChange={(e) => setEnderecoData({...enderecoData, complemento: e.target.value})} type="text" placeholder="Complemento"/>

                        <ButtonWrapper>
                            <button onClick={() => setSection(1)}>Cancelar</button>
                            <button type="submit">Adicionar</button>
                        </ButtonWrapper>
                    </EnderecoForm>
                </EnderecoSection>}

                {section === 3 &&
                <DelSection>
                    <h1>Deletar conta</h1>
                    <p>Todas as informações serão perdidas ao deletar a conta</p>
                    <button onClick={handleDeleteSubmit}>Deletar</button>
                </DelSection>}
            </ProfileWrapper>
        </div>
    )
}