import React from 'react';

import { Link } from 'react-router-dom';
const LocationPage = () => {
    return (
        <div className="container">
            <header>
                <h1>Yum-Yum-Yay 🍕🍦🍩 - Location</h1>
                <nav>
                <Link to="/">HOME</Link> |
                <Link to="/menu">MENU</Link> |
                <Link to="/location">LOCATION</Link> |
                <Link to="/aboutus">ABOUT US</Link> |
                <Link to="/contactus">CONTACT US</Link>
                </nav>
            </header>

            {/* Location Page */}
            <section id="location">
                <h2>Our Location</h2>
                <p>GAT, RR Nagar, Bengaluru</p>
                <iframe
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://maps.app.goo.gl/gCBhuWU7vbuFULry5"
                    title="Google Maps Location"
                ></iframe>
            </section>
        </div>
    );
};

export default LocationPage;
