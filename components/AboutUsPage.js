import React from 'react';

import { Link } from 'react-router-dom';
const AboutUsPage = () => {
    return (
        <div className="container" style={{
            fontFamily: "'Roboto', sans-serif",
            textAlign: 'center',
            margin: 0,
            padding: 0,
            background: `url(${require('../components/image/chef.jpg')}) center/cover`
        }}>
            <header style={{ backgroundColor: '#f8f8f8', padding: '10px' }}>
                <h1>Yum-Yum-Yay 🍕🍦🍩 - About Us</h1>
                <nav style={{ marginTop: '10px' }}>
                <Link to="/">HOME</Link> |
                <Link to="/menu">MENU</Link> |
                <Link to="/location">LOCATION</Link> |
                <Link to="/aboutus">ABOUT US</Link> |
                <Link to="/contactus">CONTACT US</Link>
                </nav>
            </header>

            {/* About Us Page */}
            <section id="aboutus" style={{
                margin: '20px 0',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '20px',
                borderRadius: '10px'
            }}>
                <h2>About Us</h2>
                <p>We serve delicious foods and tasty meals to satisfy your cravings.</p>
            </section>
        </div>
    );
};

export default AboutUsPage;