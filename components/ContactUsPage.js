import React from 'react';

import { Link } from 'react-router-dom';
const ContactUsPage = () => {
    return (
        <div className="container" style={{ fontFamily: "'Roboto', sans-serif", textAlign: 'center', margin: '20px' }}>
            <header style={{ backgroundColor: '#f8f8f8', padding: '10px' }}>
                <h1>Yum-Yum-Yay 🍕🍦🍩 - Contact Us</h1>
                <nav style={{ marginTop: '10px' }}>
                <Link to="/">HOME</Link> |
                <Link to="/menu">MENU</Link> |
                <Link to="/location">LOCATION</Link> |
                <Link to="/aboutus">ABOUT US</Link> |
                <Link to="/contactus">CONTACT US</Link>
                </nav>
            </header>

            {/* Contact Us Page */}
            <section id="contactus" style={{ margin: '20px 0' }}>
                <h2>Contact Us</h2>
                <p>Lakshmi - 9844259666</p>
                <p>Spandana - 9513168591</p>
            </section>
        </div>
    );
};

export default ContactUsPage;