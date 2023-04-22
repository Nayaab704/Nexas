const ProfessionalInfo = () => {
    return (
        <div className="professional-info">
            <p>Professional Info</p>
            <div className="professional-line1">
                <div className="company-field">
                    <p>Company</p>
                    <input />
                </div>
                <div className="field-field">
                    <p>Field</p>
                    <input />
                </div>
                <div className="experience-field">
                    <p>Experience</p>
                    <input />
                </div>
            </div>
            <button className="save-button">
                Save
            </button>
        </div>
      );
}
 
export default ProfessionalInfo;