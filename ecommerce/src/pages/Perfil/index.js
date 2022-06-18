import { API } from "../../services/api"

export const Perfil = () => {

    const getUserData = async (e) => {
        e.preventDefault()

        try {
            const response = await API.get('')
        } catch (error) {
            alert(error.response.status)
        }
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <div>

        </div>
    )
}