import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null)


export default function Context(props) {
    const [token, setToken] = useState()


    function handleSetToken(token) {
        setToken(token)
    }

    useEffect(() => {
        if(localStorage.getItem('Authentication')) {
          setToken(localStorage.getItem('Authentication'));
        }
      }, []);
      
      useEffect(() => {
        localStorage.setItem('Authentication', token);
      }, [token]);

    return (
        <DataContext.Provider value={{token, handleSetToken}}>
            {props.children}
        </DataContext.Provider>
    )
}