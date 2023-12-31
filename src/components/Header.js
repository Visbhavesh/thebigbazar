import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './head.css';
const Header = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    
    return (
        <header className="header">
            <div className="logo">BIG BAZAR</div>
            <nav>
                <ul className="navigation">
                    <li>
                        <Link to="" onClick={scrollToTop}>Home</Link>
                    </li>
                    <li>
                        <Link to="products" smooth={true} duration={500}>Pricing</Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={600}>About Us</Link>
                    </li>
                    <li>
                        <Link to="testimonials" smooth={true} duration={600}>How it works</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={600}>Get in touch</Link>
                    </li>
                </ul>
            </nav>
            <button className="cta-button">ALL PRODUCT</button>
        </header>
    );
};

export default Header;
