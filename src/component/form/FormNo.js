import React from 'react';
import './Form.css';
const FormNo = ({ handleSubmit, handleExperienceChange }) => {
  return (
    <form onSubmit={handleSubmit} method="POST" action="/oauth2/v1/authorize" data-se="o-form" slot="content" id="formNo" className="ion-form o-form o-form-edit-mode">
      <div data-se="o-form-content" className="o-form-content o-form-theme clearfix">
        <h2 data-se="o-form-head" className="okta-form-title o-form-head">How can I assist in advertising your brand?</h2>
        <div className="o-form-info-container">
          {/* Radio buttons for experience */}
          {/* <div>
            <label>
              <input
                type="radio"
                value="no"
                checked={true}
                onChange={() => handleExperienceChange('no')}
              />
              No
            </label>
          </div> */}
        </div>
        {/* Conditional rendering for additional questions */}
        <div>
          <h3>Campaign suggestions</h3>
          <div>
            <label>
              Would you like to run Ads across other websites?
              <select>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Have you run campaigns on social media (e.g., Facebook)?
              <select>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Do you want to bring new visitors to your website?
              <select>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Do you want to target the visitors reaching your website?
              <select>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <div className="o-form-button-bar">
        <button className="button button-primary" type="submit">Next</button>
      </div>
    </form>
  );
};

export default FormNo;
