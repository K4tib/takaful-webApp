import React from 'react';
import './DonationForm.css';
import donation from "./donation.jpg"

const DonationForm = () => {
  return (
    <div className="container">
      <div className="photo gg">
        <img src={donation} alt="Donation Photo" />
      </div>
      <div className="donation-form gg">
        <div className="title">Your donation is needed</div>
        <div className="recipient-profile">
          <img src="recipient_profile_picture_url_here" alt="Recipient Profile" />
          <span className="recipient-name">Recipient Name</span>
        </div>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="id" placeholder="Card number" required />
        <input type="number" placeholder="the amount" required />
        <input className="bottom" type="submit" value="submit" />
      </div>
    </div>
  );
}

export default DonationForm;