import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import abertura from '../../images/abertura.JPG'
import { Imagem, Text, Wrapper } from "./style"

export const Abertura = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <Text>
                    <p>O Vasco foi fundado como um clube de remo em 1898, por um grupo de 63 rapazes, imigrantes portugueses e luso-descendentes, reunidos no bairro da Saúde.</p>
                    <p>O nome escolhido foi Club de Regatas Vasco da Gama, pois naquele ano eram comemorados os 400 anos da viagem do célebre almirante à Índia.</p>
                    <p>"Sendo hoje, Club de Regatas Vasco da Gama – A história mais bonita do futebol."</p>
                </Text>
                <Imagem><img src={abertura} alt="abertura" /></Imagem>
                <Footer />
            </Wrapper>
        </>
    )
}