import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
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
                <a href="/settings"><FontAwesomeIcon icon={faGear}/></a>
                <Link to="login">
                    <FontAwesomeIcon icon={faUser}/>
                </Link>
            </div>
        </nav>
     );
}
 
export default Navbar;