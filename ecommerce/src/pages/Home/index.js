import { useContext } from "react"
import { Header } from "../../components/Header"
import { DataContext } from "../../context/data"

export const Home = () => {
    const {token} = useContext(DataContext)

    return (
        <>
            <Header token={token}/>
        </>
    )
}