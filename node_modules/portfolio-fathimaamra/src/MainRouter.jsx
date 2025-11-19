import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import EducationList from "./components/EducationList";
import EducationDetails from "./components/EducationDetails";
import ProjectsList from "./components/ProjectsList";
import ProjectDetails from "./components/ProjectDetails";
import Login from "./components/Login";
import Signup from "./components/Signup";

const MainRouter = () => {

    const getUserFromStorage = () => {
        const token = localStorage.getItem("token");
        const name = localStorage.getItem("name");
        const role = localStorage.getItem("role");

        return token && name && role ? { name, role } : null;
    }

    const [user, setUser] = useState(getUserFromStorage());

    useEffect(() => {
        setUser(getUserFromStorage());
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("role");
        setUser(null);
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout user={user} handleLogout={handleLogout}/>}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About  />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/educationlist" element={<EducationList />} />
                    <Route path="/educationdetails/:id?" element={<EducationDetails />} />
                    <Route path="/projectslist" element={<ProjectsList />} />
                    <Route path="/projectdetails/:id?" element={<ProjectDetails />} />
                    <Route path="/login" element={<Login setUser={setUser} />} />
                    <Route path="/signup" element={<Signup setUser={setUser}/>} />
                </Route>
            </Routes>
        </>
    )
}

export default MainRouter;