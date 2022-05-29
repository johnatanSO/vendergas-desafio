import {useState, createContext} from 'react';
export const userDataContext = createContext()


export function UserDataContextProvider({children}){
  const [name, setName] = useState('')
  const [token, setToken] = useState('')
  const [companiesList, setCompaniesList] = useState([]);

  return(
    <userDataContext.Provider value={{
      setName,
      name,
      token,
      setToken,
      companiesList,
      setCompaniesList
    }}>
      {children}
    </userDataContext.Provider>
  )
} 