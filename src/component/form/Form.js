import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('');
  const [showCampaignOptions, setShowCampaignOptions] = useState(false);
  const [showAdditionalQuestions, setShowAdditionalQuestions] = useState(false);
  const [campaignOptions, setCampaignOptions] = useState({
    webRetargeting: false,
    webProspecting: false,
    facebookRetargeting: false,
  });
  const [otherWebsitesAds, setOtherWebsitesAds] = useState('');
  const [socialMediaCampaigns, setSocialMediaCampaigns] = useState('');
  const [newVisitorsWebsite, setNewVisitorsWebsite] = useState('');
  const [targetVisitorsWebsite, setTargetVisitorsWebsite] = useState('');
  const [campaignOption, setCampaignOption] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Experience:', experience);
    console.log('Campaign Options:', campaignOptions);
    console.log('Other Websites Ads:', otherWebsitesAds);
    console.log('Social Media Campaigns:', socialMediaCampaigns);
    console.log('New Visitors to Website:', newVisitorsWebsite);
    console.log('Target Visitors to Website:', targetVisitorsWebsite);
  };

  const handleExperienceChange = (value) => {
    setExperience(value);
    if (value === 'yes') {
      setShowCampaignOptions(true);
      setShowAdditionalQuestions(false);
    } else if (value === 'no') {
      setShowCampaignOptions(false);
      setShowAdditionalQuestions(true);
    } else {
      setShowCampaignOptions(false);
      setShowAdditionalQuestions(false);
    }
  };

//   const handleCampaignOptionChange = (option) => {
//     setCampaignOptions({
//       ...campaignOptions,
//       [option]: !campaignOptions[option],
//     });
//   };
  const handleCampaignOptionChange = (option) => {
    setCampaignOption(option);
  };

  return (
    <div>
      <div id="login-bg-image" className="login-bg-image tb--background bgStyle" data-se="login-bg-image"></div>
      <form onSubmit={handleSubmit} id="x509_login" name="x509_login" className="hide">
        <input type="hidden" id="fromURI" name="fromURI" className="hidden"
          value="https://nextroll.okta.com/oauth2/v1/authorize?client_id=okta.2b1959c8-bcc0-56eb-a589-cfcfb7422f26&amp;code_challenge=E5AgTFhIxeI4d99mQFKM53B4gy1pbaCZbb6Em3-FHKg&amp;code_challenge_method=S256&amp;nonce=OMi5SH3PGwue4ML5zwcx819g5pqF6Wfc7chB5ebfNe5nJvWBp5D0vZpbUyApoFLI&amp;redirect_uri=https%3A%2F%2Fnextroll.okta.com%2Fenduser%2Fcallback&amp;response_type=code&amp;state=BT5ZhGBrUQTYSrcJaLdE4pgjgPdg0bLKzdykoYB33lgB4MP1KZhH42cNHul1OzNG&amp;scope=openid%20profile%20email%20okta.users.read.self%20okta.users.manage.self%20okta.internal.enduser.read%20okta.internal.enduser.manage%20okta.enduser.dashboard.read%20okta.enduser.dashboard.manage%20okta.myAccount.sessions.manage"
        />
      </form>
      <div className="content">
        <noscript>
          <div id="noscript-msg" className="noscript-msg">
            <div className="noscript-content">
              <h2>Javascript is required</h2>
              <h1>Javascript is disabled on your browser.&nbsp;Please enable Javascript and refresh this page.</h1>
              <a href="." className="tb--button">Refresh</a>
            </div>
          </div>
        </noscript>
        <div id="signin-container">
          <main data-se="auth-container" tabIndex="-1" id="okta-sign-in" className="auth-container main-container no-beacon" >

            <div className="okta-sign-in-header auth-header">
              <h1><img src="https://ok1static.oktacdn.com/fs/bco/1/fs01ju46rniPX1OwK0h8" className="auth-org-logo" alt="NextRoll logo logo" aria-label="NextRoll logo logo" />
              </h1><div data-type="beacon-container" className="beacon-container"></div>
            </div>
            <div className="auth-content">
              <div className="auth-content-inner">
                <div className="siw-main-view identify primary-auth">
                  <div className="siw-main-header"><div>
                  </div>
                  </div>
                  <div className="siw-main-body">
                    <form onSubmit={handleSubmit} method="POST" action="/oauth2/v1/authorize" data-se="o-form" slot="content" id="form20" className="ion-form o-form o-form-edit-mode">
                      <div data-se="o-form-content" className="o-form-content o-form-theme clearfix">
                        <h2 data-se="o-form-head" className="okta-form-title o-form-head">How can I assist in advertising your brand?</h2>
                        <div className="o-form-info-container">
                          {/* Radio buttons for experience */}
                          <div>
                            <div className='bold-black-text'>Do you have experience in Digital Advertisement?</div>
                            <label>
                              <input
                                type="radio"
                                value="yes"
                                checked={experience === 'yes'}
                                onChange={() => handleExperienceChange('yes')}
                              />
                              Yes
                            </label>
                            <label>
                              <input
                                type="radio"
                                value="no"
                                checked={experience === 'no'}
                                onChange={() => handleExperienceChange('no')}
                              />
                              No
                            </label>
                          </div>
                        </div>
                        {/* Conditional rendering for campaign options */}
                        {showCampaignOptions && (
                          <div>
                            <div className='bold-black-text'>Campaign suggestions</div>
                            <div>
                               <label>
                                <input
                                  type="checkbox"
                                  checked={campaignOption === 'webRetargeting'}
                                  onChange={() => handleCampaignOptionChange('webRetargeting')}
                                />
                                Web Retargeting
                              </label>
                            </div>
                            <div>
                              <label>
                                <input
                                  type="checkbox"
                                  checked={campaignOption === 'webProspecting'}
                                  onChange={() => handleCampaignOptionChange('webProspecting')}
                                />
                                Web Prospecting
                              </label>
                            </div>
                            <div>
                              <label>
                                <input
                                  type="checkbox"
                                  checked={campaignOption === 'facebookRetargeting'}
                                  onChange={() => handleCampaignOptionChange('facebookRetargeting')}
                                />
                                Facebook Retargeting
                              </label>
                            </div>
                          </div>
                        )}
                        {/* Conditional rendering for additional questions */}
                        {showAdditionalQuestions && (
                          <div>
                            <h3>Campaign suggestions</h3>
                            <div>
                              <label>
                               <div className='bold-black-text'> Would you like to run Ads across other websites?</div>
                                <select value={otherWebsitesAds} onChange={(e) => setOtherWebsitesAds(e.target.value)}>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </label>
                            </div>
                            <div>
                              <label>
                              <div className='bold-black-text'> Have you run campaigns on social media (e.g., Facebook)?</div>
                                <select value={socialMediaCampaigns} onChange={(e) => setSocialMediaCampaigns(e.target.value)}>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </label>
                            </div>
                            <div>
                              <label>
                              <div className='bold-black-text'>   Do you want to bring new visitors to your website?</div>
                                <select value={newVisitorsWebsite} onChange={(e) => setNewVisitorsWebsite(e.target.value)}>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </label>
                            </div>
                            <div>
                              <label>
                              <div className='bold-black-text'>  Do you want to target the visitors reaching your website?</div>
                                <select value={targetVisitorsWebsite} onChange={(e) => setTargetVisitorsWebsite(e.target.value)}>
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </select>
                              </label>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="o-form-button-bar">
                        <button className="button button-primary" type="submit">Next</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

      </div>
    </div>
  )
}
export default Form;
