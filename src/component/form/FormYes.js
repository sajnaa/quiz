import React, { useState } from 'react';
import './Form.css';
const FormYes = ({ handleSubmit, handleExperienceChange, handleCampaignOptionChange, campaignOptions }) => {
  return (
    <form onSubmit={handleSubmit} method="POST" action="/oauth2/v1/authorize" data-se="o-form" slot="content" id="formYes" className="ion-form o-form o-form-edit-mode">
      <div data-se="o-form-content" className="o-form-content o-form-theme clearfix">
        <h2 data-se="o-form-head" className="okta-form-title o-form-head">How can I assist in advertising your brand?</h2>
        <div className="o-form-info-container">
          {/* Radio buttons for experience */}
          <div>
            <label>
              <input
                type="radio"
                value="yes"
                checked={true}
                onChange={() => handleExperienceChange('yes')}
              />
              Yes
            </label>
          </div>
        </div>
        {/* Conditional rendering for campaign options */}
        <div>
          <h3>Campaign suggestions (option YES)</h3>
          <div>
            <label>
              <input
                type="checkbox"
                checked={campaignOptions.webRetargeting}
                onChange={() => handleCampaignOptionChange('webRetargeting')}
              />
              Web Retargeting
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={campaignOptions.webProspecting}
                onChange={() => handleCampaignOptionChange('webProspecting')}
              />
              Web Prospecting
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={campaignOptions.facebookRetargeting}
                onChange={() => handleCampaignOptionChange('facebookRetargeting')}
              />
              Facebook Retargeting
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

export default FormYes;
