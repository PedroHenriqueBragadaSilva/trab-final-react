import { Header } from "../../components/Header"
import { Card } from "../../components/Card"

export const Home = () => {
    return (
        <>
            <Header />

            <div className="card-container"
            style={{display: "flex"}}>
        {data.map((produtos) => (
          <Card
          imagem={produtos.imagem}
            nome={produtos.nome}
            preco={produtos.preco}
          />
        ))}
         </div>
        </>
    )
}