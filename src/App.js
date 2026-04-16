import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Purchases from "./components/Purchases"
import Transfers from "./components/Transfers"
import Assignments from "./components/Assignments"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/purchases" element={<Purchases />} />
        <Route exact path="/transfers" element={<Transfers />} />
        <Route exact path="/assignments" element={<Assignments />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
