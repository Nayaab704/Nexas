const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div className="top-half">
                <div className="primary-links">
                    <a href="/">X Home</a>
                    <a href="/peers">X My Peers</a>
                    <a href="/groups">X My Groups</a>
                    <a href="/topics">X My Topics</a>
                    <a href="/chat">X Chats</a>
                </div>

                <div className="secondary-links">
                    <a href="/match-peers">X Match Peers</a>
                    <a href="/join-groups">X Join Groups</a>
                    <a href="/find-topics">X Find Topics</a>
                </div>
            </div>
            <div className="bottom-half">
                <div className="tertiary-links">
                    <a href="/about">About</a>
                    <a href="/press">Press</a>
                    <a href="/copy">Copy</a>
                    <a href="/developers">Developers</a>
                    <a href="/contact us">Contact us</a>
                    <a href="/terms">Terms</a>
                    <a href="/privacy">Privacy</a>
                    <a href="/policy&safety">Policy & Safety</a>
                </div>
                <div className="copyright">
                    <p>X 2023 Nexas LLC</p>
                </div>
            </div>
        </nav> 
        
     );
}
 
export default Sidebar;