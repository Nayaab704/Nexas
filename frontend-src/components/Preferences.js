const Preferences = () => {
    return (
        <div className="preferences">
            <p>Preferences</p>
            <div className="preferences-line1">
                <div className="proficiencies">
                    <p>Proficiences</p>
                </div>
            </div>
            <div className="preferences-line2">
                <div className="interests">
                    <p>Interests</p>
                </div>
            </div>
            <div className="preferences-line3">
            <div className="match-radius">
                <p>Match Radius</p>
                <input />
            </div>
            </div>
            <button className="save-button">
                Save
            </button>
        </div>
      );
}
 
export default Preferences;