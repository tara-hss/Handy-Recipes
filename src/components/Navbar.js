import { useState } from "react"
import Sidebar from "./Sidebar"

import { faHome, faLink, faCog} from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){
    const [showSidebar, setShowSidebar] = useState(true)
    const links = [
        {
            name: "home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faLink
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]

    function closeSidebar() {
        setShowSidebar(false)
    }

    return (
        <>
            <div className="navbar container">
                <a href="#!" className="logo"><span> Heirloom</span>KitchenTreasures</a>
                <div className="nav-links">
                    {
                        links.map(link => (
                            <a href="#!" key={link.name}>{link.name}</a>
                        ))
                    }
                </div>
                <div onClick={() => setShowSidebar(true)} className= { showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

            </div>
            { showSidebar && <Sidebar close={closeSidebar}  links={ links } /> }
          
        </>
    )
};