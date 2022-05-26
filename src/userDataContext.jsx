import {useState, createContext} from 'react';
export const userDataContext = createContext()


export function UserDataContextProvider({children}){
  const [name, setName] = useState('')
  const [token, setToken] = useState('')

  return(
    <userDataContext.Provider value={{
      name,
      setName,
      token,
      setToken
    }}>
      {children}
    </userDataContext.Provider>
  )
} 