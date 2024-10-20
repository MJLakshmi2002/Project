import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
const MenuPage = () => {
    useEffect(() => {
        // Update menu item images dynamically
        const menuImages = document.querySelectorAll(".menu-item img");
        const menuImageSources = [
            require('../components/image/menu1.jpg'),
            require('../components/image/menu2.jpg'),
            require('../components/image/menu3.jpg')
        ];

        menuImages.forEach((image, index) => {
            image.src = menuImageSources[index];
        });

        // Add dynamic map widget (replace this with your map widget code)
        const mapWidget = document.getElementById("mapWidget");
        mapWidget.innerHTML = "<p>Insert your map widget code here</p>";
    }, []);

    return (
        <div className="container">
            <header>
                <h1>Yum-Yum-Yay 🍕🍦🍩 - Menu</h1>
                <nav>
                <Link to="/">HOME</Link> |
                <Link to="/menu">MENU</Link> |
                <Link to="/location">LOCATION</Link> |
                <Link to="/aboutus">ABOUT US</Link> |
                <Link to="/contactus">CONTACT US</Link>
                </nav>
            </header>

            {/* Menu Page */}
            <section id="menu">
                <h2>Our Menu</h2>
                <div className="grid-container">
                    <div className="menu-item"><img alt="Menu item 1" /></div>
                    <div className="menu-item"><img alt="Menu item 2" /></div>
                    <div className="menu-item"><img alt="Menu item 3" /></div>
                </div>
            </section>

            <iframe
                height="430"
                width="350"
                src="https://bot.dialogflow.com/b1a00c30-1672-450f-85a0-f0187706331c"
                title="YumYumYay Chatbot"
                style={{ marginTop: '20px' }}
            ></iframe>

            <div id="mapWidget"></div>
        </div>
    );
};

export default MenuPage;