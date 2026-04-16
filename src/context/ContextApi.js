import { createContext, useState, useEffect } from "react"
import Cookies from "js-cookie"

const ContextApi = createContext({})


export const ContextApiProvider = (props) => {
    const { children } = props
    const backendUrl = "http://localhost:5000"
    const [jwtToken, setJwtToken] = useState('')

    useEffect(() => {

        const getJwt = Cookies.get("jwt_token") || ""
        setJwtToken(getJwt)
    }, [])


    const loginUser = async ({ username, password }) => {
        console.log("Login")

    }

    return (
        <ContextApi.Provider value={{
            name: "premkumar",
            loginUser,
            backendUrl,
            jwtToken,
            setJwtToken

        }}>
            {children}
        </ContextApi.Provider>
    )
}


export default ContextApi