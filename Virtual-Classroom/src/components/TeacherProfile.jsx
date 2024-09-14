import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faUser, faSun, faTimes, faHome, faQuestion, faGraduationCap, faChalkboardUser, faHeadset } from '@fortawesome/free-solid-svg-icons';
import '../components/css/style.css'; // Adjust the path if necessary
import pic1 from './images/pic-1.jpg';
import pic2 from './images/pic-2.jpg';
import thumb1 from './images/thumb-1.png';
import thumb2 from './images/thumb-2.png';
import thumb3 from './images/thumb-3.png';
import thumb4 from './images/thumb-4.png';


const TeacherProfile = () => {
    return (
        <div>
            <div className="side-bar">
                <div id="close-btn">
                    <FontAwesomeIcon icon={faTimes} />
                </div>

                <div className="profile">
                    <img src={pic1} className="image" alt="" />
                    <h3 className="name">Shaikh Anas</h3>
                    <p className="role">Student</p>
                    <a href="profile.html" className="btn">View Profile</a>
                </div>

                <nav className="navbar">
                    <a href="home.html"><FontAwesomeIcon icon={faHome} /><span>Home</span></a>
                    <a href="about.html"><FontAwesomeIcon icon={faQuestion} /><span>About</span></a>
                    <a href="courses.html"><FontAwesomeIcon icon={faGraduationCap} /><span>Courses</span></a>
                    <a href="teachers.html"><FontAwesomeIcon icon={faChalkboardUser} /><span>Teachers</span></a>
                    <a href="contact.html"><FontAwesomeIcon icon={faHeadset} /><span>Contact Us</span></a>
                </nav>
            </div>

            <section className="teacher-profile">
                <h1 className="heading">Profile Details</h1>
                <div className="details">
                    <div className="tutor">
                        <img src={pic2}  alt="" />
                        <h3>John Deo</h3>
                        <span>Developer</span>
                    </div>
                    <div className="flex">
                        <p>Total playlists : <span>4</span></p>
                        <p>Total videos : <span>18</span></p>
                        <p>Total likes : <span>1208</span></p>
                        <p>Total comments : <span>52</span></p>
                    </div>
                </div>
            </section>

            <section className="courses">
                <h1 className="heading">Our Courses</h1>
                <div className="box-container">
                    <div className="box">
                        <div className="thumb">
                            <img src={thumb1}  alt="" />
                            <span>10 videos</span>
                        </div>
                        <h3 className="title">Complete HTML Tutorial</h3>
                        <a href="playlist.html" className="inline-btn">View Playlist</a>
                    </div>

                    <div className="box">
                        <div className="thumb">
                            <img src={thumb2}  alt="" />
                            <span>10 videos</span>
                        </div>
                        <h3 className="title">Complete CSS Tutorial</h3>
                        <a href="playlist.html" className="inline-btn">View Playlist</a>
                    </div>

                    <div className="box">
                        <div className="thumb">
                            <img src={thumb3}  alt="" />
                            <span>10 videos</span>
                        </div>
                        <h3 className="title">Complete JavaScript Tutorial</h3>
                        <a href="playlist.html" className="inline-btn">View Playlist</a>
                    </div>

                    <div className="box">
                        <div className="thumb">
                            <img src={thumb4}  alt="" />
                            <span>10 videos</span>
                        </div>
                        <h3 className="title">Complete Bootstrap Tutorial</h3>
                        <a href="playlist.html" className="inline-btn">View Playlist</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeacherProfile;
