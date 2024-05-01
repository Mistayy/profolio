import React from 'react';
import { getYear } from '../utilities/utilities';
import { Link } from 'react-router-dom'; 
import logoImage from '../images/logo.svg';
import githubLogo from '../images/codepenlogo.svg';
import codepenLogo from '../images/emaillogo.svg';
import emailLogo from '../images/githublogo.svg';

const Footer = () => (
    <footer>
        <section className='logo-title'>
            <Link to="/">
                <img src={logoImage} alt="Logo" />
            </Link>
        </section>
        <p>&copy; {getYear()} | Liwen Zhuang</p>
        <section className="social-media">
            <a href="#"><img src={githubLogo} alt='instagramIcon'/></a>
            <a href="#"><img src={codepenLogo} alt='twitterIcon'/></a>
            <a href="#"><img src={emailLogo} alt='facebbokIcon'/></a>
        </section>
            
    </footer>
);

export default Footer;