import { Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Purchases from "./components/Purchases"
import Transfers from "./components/Transfers"
import Assignments from "./components/Assignments"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/purchases" element={<Purchases />} />
        <Route exact path="/transfers" element={<Transfers />} />
        <Route exact path="/assignments" element={<Assignments />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />

      </Routes>

    </>
  );
}

export default App;
