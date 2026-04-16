import axios from "axios"
import { useContext, useState } from "react"
import ContextApi from "../context/ContextApi.js"
import { TailSpin } from "react-loader-spinner"
const Login = () => {

    const { backendUrl, setJwtToken, jwtToken } = useContext(ContextApi)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoader, setIsLoader] = useState(false)
    const onSubmitLogin = async (e) => {
        try {
            setIsLoader(true)
            console.log("onSubmit Login")
            e.preventDefault()


            const response = await axios.post(`${backendUrl}/api/user/login`, {
                username, password
            })
            console.log(response.data, jwtToken)

            const newToken = response.data.jwt_token
            setJwtToken(newToken)
            setIsLoader(true)

        } catch (e) {
            setIsLoader(true)

            console.log(e.message)
        }
    }

    return (


        <div className="p-3  flex flex-col justify-center items-center">
            <div className="shadow-md w-100 p-5">
                <h1 className="text-center font-semibold font-bold text-xl">Login</h1>
                <form onSubmit={onSubmitLogin}>
                    <div className="my-3">
                        <label htmlFor="username" className="text-gray-700 font-semibold text-md">Username</label>
                        <div className="w-full border-1 rounded-md">
                            <input id="username" value={username} onChange={(e) => setUsername(e.target.value)}
                                className="text-gray-500 w-full px-2 py-1 outline-none " placeholder="Enter your username" />
                        </div>
                    </div>
                    <div className="my-3">
                        <label htmlFor="password" className="text-gray-700 font-semibold text-md">Password</label>
                        <div className="w-full border-1 rounded-md">
                            <input id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                className="text-gray-500 w-full px-2 py-1 outline-none " placeholder="Enter your password" />
                        </div>
                    </div>
                    <div className="my-3 flex justify-center">
                        {
                            !isLoader ? <div>
                                <button type="submit" className="text-white bg-blue-500 px-6 py-2 rounded-md cursor-pointer text-sm font-bold ">
                                    Login
                                </button>
                            </div> : <div>
                                <TailSpin type="TailSpin" width={30} height={30} color="blue" />
                            </div>
                        }
                    </div>
                </form>

            </div>
        </div>


    )
}


export default Login
