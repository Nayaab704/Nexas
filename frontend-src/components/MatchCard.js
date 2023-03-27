const MatchCard = () => {
    return ( 
        <div className="match-card">
            <div className="profile">
                <div className="profile-pic">
                    X
                </div>
                <div className="profile-name">
                    Name
                </div>
            </div>
            <div className="profile-info">
                <div className="info-header">
                    <h4>Professional Info</h4>
                </div>
                <div className="summary-info">
                    <p>Company:</p>
                    <p>Field:</p>
                    <p>Experience:</p>
                </div>
                <div className="categorical-info">
                    <div className="categorical-header">
                        <h4>Proficiencies / Interests</h4>
                    </div>
                    <div className="categories">
                        <div className="proficiencies">
                            <p>- Prof 1</p>
                            <p>- Prof 2</p>
                            <p>- Prof 3</p>
                        </div>
                        <div className="interests">
                            <p>- Int 1</p>
                            <p>- Int 2</p>
                            <p>- Int 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MatchCard;