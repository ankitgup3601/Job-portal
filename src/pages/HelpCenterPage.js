import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";



const HelpCenterPage = () => {
  const emailAddress = "ankitgupta@topsinfosoluctions.com";
  const [background, setBackground] = useState('');
  return (
    <div>
      <h1>Website Help</h1>
      <p>
        If you need help or assistance with a product or service, you can
        typically contact us via a "Contact Us" page on
        the website or through other available channels such as email, phone,
        or live chat.
      </p>
      <Link className="btn--dark" to={`mailto:${emailAddress}`}>Email</Link>

      <div className="contact_section">
        <Link className="btn--outline" to='/help/faq' style={{backgroundColor : background == 'faq' && "#bc4123"}} onClick= {()=> setBackground('faq')}>View The FAQ</Link>
        <Link className="btn--outline" to="/help/contact" style={{backgroundColor : background == 'contact' && "#bc4123"}} onClick= {()=> setBackground('contact')}>Contact Us</Link>
      </div>
      <Outlet/>
    </div>
  );
};

export default HelpCenterPage;
