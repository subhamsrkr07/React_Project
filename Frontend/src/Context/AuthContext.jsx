import React, { Children, createContext } from 'react'

export const authDataContext = createContext()
function AuthContext({children}) {
    let serverurl = "https://react-project-backend-5s0n.onrender.com" 

    let value = {
        serverurl
    } 

  return (
    <div>
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>
    </div>
  )
}

export default AuthContext
