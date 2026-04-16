import axios from "axios"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ContextApi from "../context/ContextApi.js"
import { TailSpin } from "react-loader-spinner"
import { toast } from "react-toastify"
const SignUp = () => {
    const roles = [
        "Admin",
        "Commander",
        "Officer"
    ]
    const { backendUrl } = useContext(ContextApi)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState(roles[0])
    const [isLoader, setIsLoader] = useState(false)
    const onSubmitSignUp = async (e) => {
        try {

            e.preventDefault()
            setIsLoader(true)



            const response = await axios.post(`${backendUrl}/api/user/sign-up`, {
                username, password, role
            })

            console.log(response.data)
            toast.success(response.data.success)

            setIsLoader(false)

        } catch (e) {
            setIsLoader(false)
            if (e.response.status === 409) {
                toast.error("username already registered")
            }
            else if (e.response.status === 400) {
                toast.error("input filelds are required")
            }

        }
    }



    return (


        <div className="p-3  flex flex-col justify-center items-center">
            <div className="shadow-md w-100 p-5">
                <h1 className="text-center font-semibold font-bold text-xl">Sign Up</h1>
                <form onSubmit={onSubmitSignUp}>
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
                    <div className="my-3 flex flex-col">
                        <label htmlFor="password" className="text-gray-700 font-semibold text-md">Role</label>
                        <select className="w-full border-1 rounded-md outline-none px-2 py-1 " value={role} onChange={(e) => setRole(e.target.value)} >
                            {
                                roles.map((item) => (
                                    <option key={item}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="my-3 flex justify-center">
                        {
                            !isLoader ? <div>
                                <button type="submit" className="text-white bg-blue-500 px-6 py-2 rounded-md cursor-pointer text-sm font-bold ">
                                    Sign Up
                                </button>
                            </div> : <div>
                                <TailSpin type="TailSpin" width={30} height={30} color="blue" />
                            </div>
                        }
                    </div>
                    <div>
                        <Link to="/login" className="text-blue-500 text-sm font-bold"  >Login</Link>
                    </div>
                </form>

            </div>
        </div>


    )
}


export default SignUp
