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
            </div>
            <div className="experience">
                <p>Experience: </p>
                <div className="experience-options">
                    <label>
                        <input
                        type="radio"
                        name="options"
                        />
                        {" "} 1-3 Years
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="options"
                        />
                        {" "} 2-6 Years
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="options"
                        />
                        {" "} {">"}6 Years
                    </label>
                </div>
            </div>
            <button className="save-button">
                Save
            </button>
        </div>
      );
}
 
export default ProfessionalInfo;
