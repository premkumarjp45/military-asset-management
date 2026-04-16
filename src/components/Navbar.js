import { Link } from "react-router-dom"
const Navbar = () => {


    return (
        <div className="px-10 py-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <img src="https://res.cloudinary.com/dokbp23jt/image/upload/v1776322823/logo_c2pbue.avif" alt="website logo" />
                <h1 className="text-md text-gray-600 font-bold font-sans">Military Management</h1>
            </div>
            <div className="flex gap-10 items-center">
                <button type="button">
                    <Link to="/" className="text-md text-gary-400 font-semibold cursor-pointer hover:text-gray-700">Dashboard</Link>
                </button>
                <button type="button">
                    <Link to="/purchases" className="text-md text-gary-400 font-semibold cursor-pointer hover:text-gray-700">Purchases</Link>
                </button>
                <button type="button">
                    <Link to="/transfers" className="text-md text-gary-400 font-semibold cursor-pointer hover:text-gray-700">Transfers</Link>
                </button>
                <button type="button">
                    <Link to="/assignments" className="text-md text-gary-400 font-semibold cursor-pointer hover:text-gray-700">Assignments</Link>
                </button>
                <Link to="/login">
                    <button type="button" className="text-white bg-blue-500 px-6 py-2 rounded-md cursor-pointer text-sm font-bold ">
                        Login
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default Navbar