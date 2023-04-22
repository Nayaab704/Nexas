const PersonalInfo = () => {
    return (
        <div className="personal-info">
            <p>Personal Info</p>
            <div className="personal-line1">
                <div className="email-field">
                    <p>Email Address</p>
                    <input />
                </div>
                <div className="first-name-field">
                    <p>First Name</p>
                    <input />
                </div>
                <div className="last-name-field">
                    <p>Last Name</p>
                    <input />
                </div>
            </div>
            <div className="personal-line2">
                <div className="new-password-field">
                    <p>New Password</p>
                    <input />
                </div>
                <div className="confirm-password-field">
                    <p>Confirm Password</p>
                    <input />
                </div>
            </div>
            <button className="save-button">
                Save
            </button>
        </div>
     );
}
 
export default PersonalInfo;