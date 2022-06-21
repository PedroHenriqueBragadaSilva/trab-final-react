import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { DataContext } from "../../context/data"
import { API } from "../../services/api"
import { ButtonWrapper, ProfileSection, SectionWrapper, Wrapper } from "./style"

export const EditFuncionario = () => {
    const [update, setUpdate] = useState()
    const [data, setData] = useState()
    const {id, role, token} = useContext(DataContext)
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

        history.goBack()
    }

    return (
        <Wrapper>
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
                    <input onChange={(e) => setUpdate({...update, cpf: e.target.value})} type="text" placeholder={data?.cpf}/>
                    <label htmlFor="telefone">Telefone</label>
                    <input onChange={(e) => setUpdate({...update, telefone: e.target.value})} type="text" placeholder={data?.telefone}/>
                    <label htmlFor="dataNascimento">Data de nascimento</label>
                    <input onChange={(e) => setUpdate({...update, dataNascimento: e.target.value})} type="date" placeholder={data?.dataNascimento} />

                    <ButtonWrapper>
                        <button type="button" onClick={() => history.goBack()}>Voltar</button>
                        <button type="submit">Atualizar</button>
                    </ButtonWrapper>
                </ProfileSection>
            </SectionWrapper>
        </Wrapper>
    )
}