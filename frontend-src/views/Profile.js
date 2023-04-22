import emptyProfilePic from "../assets/img/empty_profile.png"

const Profile = () => {
    return (
        <div className="profile">
            <div className="left-profile">
                <div className="profile-picture">
                    <img src={ emptyProfilePic } alt="Profile Pic"/>
                </div>
                <div className="profile-secondary-info">
                    <div className="secondary-professional-info">
                        <div className="secondary-professional-header">
                            <h3>Professional Info</h3>
                        </div>
                        <div>
                            <p>Company:</p>
                        </div>
                        <div>
                            <p>Field:</p>
                        </div>
                        <div>
                            <p>Job Title:</p>
                        </div>
                        <div>
                            <p>Experience:</p>
                        </div>
                    </div>
                    <div className="secondary-proficiency-info">
                        <div className="secondary-proficiency-header">
                            <h3>Proficiences</h3>
                        </div>
                    </div>
                    <div className="secondary-interest-info">
                        <div className="secondary-interest-header">
                            <h3>Interests</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-profile">
                <div className="profile-primary-info">
                    <div className="profile-name">
                        <h2>Name Goes Here</h2>
                    </div>
                    <div className="profile-title">
                        <h3>Title</h3>
                    </div>
                    <div className="profile-bio">
                        <p>Typed bio/description of user with limited character count goes here.</p>
                    </div>
                </div>
                <div className="profile-groups-info">
                    <div className="peer-row">
                        <div>
                            <h3>Recent Peers</h3>
                        </div>
                    </div>
                    <div className="groups-row">
                        <div>
                            <h3>Recent Groups</h3>
                        </div>
                    </div>
                    <div className="topics-row">
                        <div>
                            <h3>Recent Topics</h3>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Profile;