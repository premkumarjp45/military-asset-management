import { useContext, useState, useEffect } from "react"
import axios from "axios"
import Cookie from "js-cookie"
import ContextApi from "../context/ContextApi.js"
const Dashboard = () => {

    const { backendUrl, jwtToken, navigate } = useContext(ContextApi)
    console.log(backendUrl)
    const [assets, setAssets] = useState([])
    const getAllAssets = async () => {
        try {

            const response = await axios.post(`${backendUrl}/api/assets`, {}, {
                headers: {
                    "Authorization": `Bearer ${jwtToken}`
                }
            })
            console.log(response.data)
        } catch (e) {
            console.log(e.message, e.response.status)
        }
    }

    useEffect(() => {
        const getJwt = Cookie.get("jwt_token")
        if (getJwt === undefined || getJwt === "") {
            return navigate("/login")
        }
        getAllAssets()
    }, [])

    return (
        <div className="p-3">
            Dashboard
        </div>
    )
}


export default Dashboard