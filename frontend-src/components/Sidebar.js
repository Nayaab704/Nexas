import { faBinoculars, faBookOpen, faComments, faCopyright, faHandshake, 
    faHome, faRightToBracket, faUserGroup, faUsers } 
    from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div className="top-half">
                <div className="primary-links">
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome}/> Home
                    </Link>
                    <a href="/peers">
                        <FontAwesomeIcon icon={faUserGroup}/> My Peers
                    </a>
                    <a href="/groups">
                        <FontAwesomeIcon icon={faUsers}/> My Groups
                    </a>
                    <a href="/topics">
                        <FontAwesomeIcon icon={faBookOpen}/> My Topics
                    </a>
                    <a href="/chat">
                        <FontAwesomeIcon icon={faComments}/> Chats
                    </a>
                </div>

                <div className="secondary-links">
                    <a href="/match-peers">
                        <FontAwesomeIcon icon={faHandshake}/> Match Peers
                    </a>
                    <a href="/join-groups">
                        <FontAwesomeIcon icon={faRightToBracket}/> Join Groups
                    </a>
                    <a href="/find-topics">
                        <FontAwesomeIcon icon={faBinoculars}/> Find Topics
                    </a>
                </div>
            </div>
            <div className="bottom-half">
                <div className="tertiary-links">
                    <a href="/about">
                        About
                    </a>
                    <a href="/press">
                        Press
                    </a>
                    <a href="/copy">
                        Copy
                    </a>
                    <a href="/developers">
                        Developers
                    </a>
                    <a href="/contact us">
                        Contact us
                    </a>
                    <a href="/terms">
                        Terms
                    </a>
                    <a href="/privacy">
                        Privacy
                    </a>
                    <a href="/policy&safety">
                        Policy & Safety
                    </a>
                </div>
                <div className="copyright">
                    <p><FontAwesomeIcon icon={faCopyright}/> 2023 Nexas LLC</p>
                </div>
            </div>
        </nav> 
        
     );
}
 
export default Sidebar;