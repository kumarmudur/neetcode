import { BrowserRouter , Routes , Route } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage"
import AllProblems from "./Components/AllProblems/AllProblems";

import Navbar from "./constants/navbar/Navbar"
import ProblemsPage from "./components/problemsPage/ProblemsPage";
import Signup from "./components/signup/Signup"
import Login from "./components/login/Login"
import "./App.css"

function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/problemset/all/" element={<AllProblems />} />
                <Route path="/problems/:pid/" element={<ProblemsPage  />} />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
  )
}

export default App