import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = (event) => {
        if (
            !event.relatedTarget ||
            (event.relatedTarget && !event.relatedTarget.classList.contains("dropdown"))
        ) {
            setIsOpen(false);
        }
    };

    return ( 
        <nav className="navbar">
            <div className="logo">
                <h1>
                    <FontAwesomeIcon icon={faPeopleArrows}/> PeerMe
                </h1>
            </div>
            <div className="searchbar">
                <input type="text"/>
            </div>
            <div className="user-links">
                <a href="/notifications">
                    <FontAwesomeIcon icon={faBell}/>
                </a>
                <Link to="/settings">
                    <FontAwesomeIcon icon={faGear}/>
                </Link>
                <div 
                    className="icon-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <FontAwesomeIcon icon={faUser} />
                    {isOpen && (
                        <div className="dropdown">
                            <Link to="/profile">Profile</Link>
                            <Link to="/login">Login</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;