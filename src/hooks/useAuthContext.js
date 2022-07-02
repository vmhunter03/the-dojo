import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
//this allows to be used the AuthContext on context folder
export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if(!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  return context
}