import { useState } from "react"
import Sidebar from "./Sidebar"

export default function Navbar(){
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <>
            <div className="navbar container">
                <a href="#!" className="logo"><span>Riazi</span> Podiatry</a>
                <div className="nav-links">
                    <a href="#!">Home</a>
                    <a href="#!">About us</a>
                    <a href="#!">Settings</a>
                    {/* <a href="#!">Healthworker login</a> */}
                </div>
                <div onClick={() => setShowSidebar(!showSidebar)} className= { showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

            </div>
            <Sidebar />
        </>
    )
};