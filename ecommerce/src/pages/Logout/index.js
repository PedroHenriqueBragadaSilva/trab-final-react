import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { DataContext } from "../../context/data"


export const Logout = () => {
    const history = useHistory()
    const {handleSetToken} = useContext(DataContext)
    
    localStorage.clear()
    handleSetToken(null)

    history.push('/')
}