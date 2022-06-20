import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { FuncionarioCard } from "../../components/FuncionarioCard"
import { Header } from "../../components/Header"
import { DataContext } from "../../context/data"
import { API } from "../../services/api"
import { ContentWrapper, CriaButton, Wrapper } from "./style"

export const Funcionarios = () => {
    const {token} = useContext(DataContext)
    const [data, setData] = useState()
    const history = useHistory()


    useEffect(() => {
        const getUserData = async () => {

            if(token) {
                try {
                    const response = await API.get("/funcionario", {headers: {
                        Authorization: `Bearer ${token}`
                    }})
                    setData(response.data)
                } catch (error) {
                    console.log(error.response.status)
                }
            }
        }
        getUserData()
    }, [token])

    return (
        <div>
            <Header />
            <Wrapper>
                <ContentWrapper>
                    <CriaButton onClick={() => history.push('/create/funcionario')}>Criar Funcionário</CriaButton>
                    {data?.map(funcionario => <FuncionarioCard key={funcionario.id} nome={funcionario.username} cpf={funcionario.cpf} id={funcionario.id}/>)}
                </ContentWrapper>
            </Wrapper>
        </div>
    )
}