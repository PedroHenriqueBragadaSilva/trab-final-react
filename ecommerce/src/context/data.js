import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null)


export default function Context(props) {
    const [token, setToken] = useState()
    const [role, setRole] = useState()
    const [id, setId] = useState()
    const [carrinho, setCarrinho] = useState([])


    function handleSetToken(token) {
        setToken(token)
        
        setRole(JSON.parse(window.atob(token.split('.')[1])).sub.split('-')[2])
        setId(JSON.parse(window.atob(token.split('.')[1])).sub.split('-')[0])
    }

    function handleSetCarrinho(carrinho) {
        setCarrinho(carrinho)
    }

    useEffect(() => {
        if(localStorage.getItem('Authentication')) {
          handleSetToken(localStorage.getItem('Authentication'));
        }

        if(localStorage.getItem('Carrinho')) {
            handleSetCarrinho(JSON.parse(localStorage.getItem('Carrinho')));
          }
    }, []);
    
      
    return (
        <DataContext.Provider value={{token, role, id, carrinho, handleSetToken, handleSetCarrinho}}>
            {props.children}
        </DataContext.Provider>
    )
}