import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null)


export default function Context(props) {
    const [token, setToken] = useState()
    const [role, setRole] = useState()
    const [id, setId] = useState()


    function handleSetToken(token) {
        setToken(token)
        
        setRole(JSON.parse(window.atob(token.split('.')[1])).sub.split('-')[2])
        setId(JSON.parse(window.atob(token.split('.')[1])).sub.split('-')[0])
    }

    useEffect(() => {
        if(localStorage.getItem('Authentication')) {
          handleSetToken(localStorage.getItem('Authentication'));
        }
      }, []);
      
      useEffect(() => {
        localStorage.setItem('Authentication', token);
      }, [token]);

    return (
        <DataContext.Provider value={{token, role, id, handleSetToken}}>
            {props.children}
        </DataContext.Provider>
    )
}