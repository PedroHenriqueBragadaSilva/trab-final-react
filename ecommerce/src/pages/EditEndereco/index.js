import { useParams } from "react-router-dom"

export const EditEndereco = () => {
    const {id} = useParams()

    return (
        <h1>{id}</h1>
    )
}