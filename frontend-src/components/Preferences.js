import { useState } from "react";

const Preferences = () => {
    return (
        <div className="preferences">
            <p>Preferences</p>
            <div className="proficiencies-label">
                <p>Proficiences</p>
            </div>
            <div className="proficiencies-languages">
                <div className="language-header">
                    <p>Languages:</p>
                </div>
                <div className="language-options">
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} Java
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} C
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} Python
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} JavaScript
                    </label>
                </div>
            </div>    
            <div className="proficiencies-platforms">
                <div className="platform-header">
                    <p>Platforms:</p>
                </div>
                <div className="platform-options">
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} CodeChef
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} LeetCode
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} HackerRank
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} InterviewBit
                    </label>
                </div>
            </div>    
            <div className="proficiencies-domains">
                <div className="domain-header">
                    <p>Domains:</p>
                </div>
                <div className="domain-options">
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} Front-End
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} Testing
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} Database Systems
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} Back-End
                    </label>
                </div>
            </div>    
            <div className="interests-label">
                <p>Interests</p>
            </div>
            <div className="interests-languages">
                <div className="language-header">
                    <p>Languages:</p>
                </div>
                <div className="language-options">
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} Java
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} C
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} Python
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} JavaScript
                    </label>
                </div>
            </div>    
            <div className="interests-platforms">
                <div className="platform-header">
                    <p>Platforms:</p>
                </div>
                <div className="platform-options">
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} CodeChef
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} LeetCode
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} HackerRank
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} InterviewBit
                    </label>
                </div>
            </div>    
            <div className="interests-domains">
                <div className="domain-header">
                    <p>Domains:</p>
                </div>
                <div className="domain-options">
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} Front-End
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} Testing
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} Database Systems
                    </label>
                    <label>
                        <input 
                            type="checkbox"
                        />
                        {" "} Back-End
                    </label>
                </div>
            </div>    
            <button className="save-button">
                Save
            </button>
        </div>
      );
}
 
export default Preferences;
