import { createContext, useState } from "react";

export const DataContext = createContext(null)


export default function Context(props) {
    const [token, setToken] = useState()

    function handleSetToken(token) {
        setToken(token)
    }

    return (
        <DataContext.Provider value={{token, handleSetToken}}>
            {props.children}
        </DataContext.Provider>
    )
}