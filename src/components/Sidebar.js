import { Link, NavLink } from "react-router-dom";
import LogoS from '../assets/images/logo-s.png'
import LogoSubtitle from '../assets/images/logo_sub.png'
import './sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope, faLink, faF } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

export default function Sidebar () {
    return (
        <div className='nav-bar'>
             <Link className='logo' to='/'>
                <img className='img' src={LogoS} alt='logo' />
                {/* <img className='sub-logo' src={LogoSubtitle} alt='stefan' /> */}
             </Link>
             <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
             </nav>
             <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/stefan-kirilov-51642b2a0/'>
                    <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.facebook.com/stefan.kirilov.7/'>
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/StefanKirilov'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
             </ul>
        </div>
    )
}