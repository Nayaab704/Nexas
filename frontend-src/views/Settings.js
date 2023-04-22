import PersonalInfo from "../components/PersonalInfo";
import Preferences from "../components/Preferences";
import ProfessionalInfo from "../components/ProfessionalInfo";

const Settings = () => {
    return (
        <div className="settings">
            <div className="settings-header">
                <h1>Settings</h1>
            </div>   
            <PersonalInfo/>
            <ProfessionalInfo />
            <Preferences/>
        </div>
      );
}
 
export default Settings;