import React from 'react';
import CourseBox from './CourseBox';
import '../components/css/style.css'; // Ensure this path is correct

const ProfilePage = () => {
    // Sample data for user's courses
    const userCourses = [
        { imgSrc: "images/thumb-1.png", title: "Complete HTML Tutorial", videoCount: "10 videos", link: "/playlist" },
        { imgSrc: "images/thumb-2.png", title: "Complete CSS Tutorial", videoCount: "12 videos", link: "/playlist" },
        { imgSrc: "images/thumb-3.png", title: "JavaScript for Beginners", videoCount: "15 videos", link: "/playlist" }
    ];

    return (
        <main className="profile-page">
            <section className="profile-header">
                <div className="profile-info">
                    <img src="images/profile-picture.jpg" className="profile-picture" alt="Profile" />
                    <h1 className="username">John Doe</h1>
                    <p className="user-role">Student</p>
                    <Link to="/edit-profile" className="btn">Edit Profile</Link>
                </div>
            </section>

            <section className="user-courses">
                <h1 className="heading">My Courses</h1>
                <div className="box-container">
                    {userCourses.map((course, index) => (
                        <CourseBox
                            key={index}
                            imgSrc={course.imgSrc}
                            title={course.title}
                            videoCount={course.videoCount}
                            link={course.link}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ProfilePage;
