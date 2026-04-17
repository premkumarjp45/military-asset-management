import { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

const ContextApi = createContext({})


export const ContextApiProvider = (props) => {
    const { children } = props
    const backendUrl = "http://localhost:5000"
    const [jwtToken, setJwtToken] = useState('')
    const navigate = useNavigate()






    useEffect(() => {

        const getJwt = Cookies.get("jwt_token") || ""
        setJwtToken(getJwt)
    }, [])





    const onLogout = () => {
        Cookies.remove("jwt_token")
        setJwtToken("")
        navigate("/login")
    }

    return (
        <ContextApi.Provider value={{
            name: "premkumar",

            backendUrl,
            jwtToken,
            setJwtToken,
            onLogout,
            navigate

        }}>
            {children}
        </ContextApi.Provider>
    )
}


export default ContextApi