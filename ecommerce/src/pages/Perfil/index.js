import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../context/data"
import { API } from "../../services/api"
import { Header } from "../../components/Header"
import { DelSection, ProfileNav, ProfileSection, ProfileWrapper, SectionWrapper } from "./style"
import { useHistory } from "react-router-dom"

export const Perfil = () => {

    const {id, role, token} = useContext(DataContext)
    const [data, setData] = useState()

    const [update, setUpdate] = useState()

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
            const response = await API.put(`/${role}/${id}`, update, {headers: {
                Authorization: `Bearer ${token}`
            }})
            console.log(response.status)
        } catch (error) {
            console.log('erro')
        }
    }

    const handleDeleteSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await API.delete(`/${role}/${id}`, {headers: {
                Authorization: `Bearer ${token}`
            }})
            console.log(response.status)
        } catch (error) {
            console.log('erro')
        }

        history.push('/')
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div>
            <Header />
            
            <ProfileWrapper>
                <ProfileNav>
                    <button onClick={() => setSection(0)}>Mnha conta</button>
                    {role === "cliente" && <button onClick={() => setSection(1)}>Enderecos</button>}
                    {role === "cliente" && <button onClick={() => setSection(2)}>Meus pedidos</button>}
                    <button onClick={() => setSection(3)}>Deletar conta</button>
                </ProfileNav>

                {section === 0 &&
                <div>
                    <h1>Minha Conta</h1>
                    <SectionWrapper>
                        <ProfileSection>
                            <label htmlFor="">Username</label>
                            <input onChange={(e) => setUpdate({...update, username: e.target.value})} type="text" placeholder={data?.usuario.username}/>

                            <label htmlFor="">Email</label>
                            <input onChange={(e) => setUpdate({...update, email: e.target.value})} type="email" placeholder={data?.usuario.email}/>

                            <label htmlFor="">Senha</label>
                            <input onChange={(e) => setUpdate({...update, senha: e.target.value})} type="password" placeholder=""/>

                            <label htmlFor="">Nome</label>
                            <input onChange={(e) => setUpdate({...update, nome: e.target.value})} type="text" placeholder={data?.nome}/>
                        </ProfileSection>
                        <ProfileSection onSubmit={handleUpdateSubmit}>
                            <label htmlFor="">CPF</label>
                            <input onChange={(e) => setUpdate({...update, cpf: e.target.value})} type="text" placeholder={data?.cpf}/>

                            <label htmlFor="">Telefone</label>
                            <input onChange={(e) => setUpdate({...update, telefone: e.target.value})} type="text" placeholder={data?.telefone}/>

                            <label htmlFor="">Data de nascimento</label>
                            <input onChange={(e) => setUpdate({...update, dataNascimento: e.target.value})} type="date" placeholder=""/>
                            
                            <button type="submit">Atualizar</button>
                        </ProfileSection>
                    </SectionWrapper>
                </div>}

                {section === 1 &&
                <div>
                    <h1>Enderecos</h1>
                </div>}

                {section === 2 &&
                <div>
                    <h1>Meus pedidos</h1>
                </div>}

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