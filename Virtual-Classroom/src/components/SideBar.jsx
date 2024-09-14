import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHome, faQuestion, faGraduationCap, faChalkboardUser, faHeadset } from '@fortawesome/free-solid-svg-icons';
import pic1 from './images/pic-1.jpg';


const SideBar = () => {
    return (
        <div className="side-bar">
            <div id="close-btn">
                <FontAwesomeIcon icon={faTimes} />
            </div>
            <div className="profile">
                <img src={pic1} className="image" alt="" />
                <h3 className="name">Shaikh Anas</h3>
                <p className="role">Student</p>
                <Link to="/profile" className="btn">View Profile</Link>
            </div>
            <nav className="navbar">
                <Link to="/"><FontAwesomeIcon icon={faHome} /><span> Home</span></Link>
                <Link to="/about"><FontAwesomeIcon icon={faQuestion} /><span> About</span></Link>
                <Link to="/courses"><FontAwesomeIcon icon={faGraduationCap} /><span> Courses</span></Link>
                <Link to="/teachers"><FontAwesomeIcon icon={faChalkboardUser} /><span> Teachers</span></Link>
                <Link to="/contact"><FontAwesomeIcon icon={faHeadset} /><span> Contact Us</span></Link>
            </nav>
        </div>
    );
};

export default SideBar;
