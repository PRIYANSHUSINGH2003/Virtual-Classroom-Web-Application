import React from 'react';

// CourseBox Component
const CourseBox = ({ tutorImg, tutorName, date, thumbImg, videos, title }) => {
    return (
        <div className="box">
            <div className="tutor">
                <img src={tutorImg} alt="" />
                <div className="info">
                    <h3>{tutorName}</h3>
                    <span>{date}</span>
                </div>
            </div>
            <div className="thumb">
                <img src={thumbImg} alt="" />
                <span>{videos} videos</span>
            </div>
            <h3 className="title">{title}</h3>
            <a href="playlist.html" className="inline-btn">view playlist</a>
        </div>
    );
};

export default CourseBox;