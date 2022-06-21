import { Header } from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Footer } from "../../components/Footer"

export const Home = () => {
  return (
    <>
    <Header />
    
    <Banner />
   {<>
    <div style={{display : "flex"}}>
     { <div>
      <a href="/abertura"><img style={{ width : '100%'}} src={require('../../images/sobre.png')} /></a>
      </div>}

      {<div>
      <a href="/cadastro"><img style={{ width : '100%'}} src={require('../../images/cadastro.png')} /></a>
      </div>}
      </div>
   </>}
   <Footer />
    </>
  )
}