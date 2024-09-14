import React from 'react';
import CourseBox from './CourseBox'; // Adjust the path if necessary
import pic2 from './images/pic-2.jpg';
import pic3 from './images/pic-3.jpg';
import pic4 from './images/pic-4.jpg';
import pic5 from './images/pic-5.jpg';
import pic6 from './images/pic-6.jpg';
import pic7 from './images/pic-7.jpg';
import thumb1 from './images/thumb-1.png';
import thumb2 from './images/thumb-2.png';
import thumb3 from './images/thumb-3.png';
import thumb4 from './images/thumb-4.png';
import thumb5 from './images/thumb-5.png';
import thumb6 from './images/thumb-6.png';

// CourseList Component
const CourseList = () => {
    const courses = [
      { tutorImg: pic2, tutorName: "john deo", date: "21-10-2022", thumbImg: thumb1, videos: "10", title: "Complete HTML Tutorial" },
      { tutorImg: pic2, tutorName: "john deo", date: "21-10-2022", thumbImg: thumb2, videos: "10", title: "Complete CSS Tutorial" },
      { tutorImg: pic3, tutorName: "john deo", date: "21-10-2022", thumbImg: thumb3, videos: "10", title: "Complete JS Tutorial" },
      { tutorImg: pic4, tutorName: "john deo", date: "21-10-2022", thumbImg: thumb4, videos: "10", title: "Complete JS Tutorial" },
      { tutorImg: pic5, tutorName: "john deo", date: "21-10-2022", thumbImg: thumb5, videos: "10", title: "Complete JS Tutorial" },
      { tutorImg: pic6, tutorName: "john deo", date: "21-10-2022", thumbImg: thumb6, videos: "10", title: "Complete JS Tutorial" },

      // Add more courses as needed
    ];
  
    return (
      <section className="courses">
        <h1 className="heading">Our Courses</h1>
        <div className="box-container">
          {courses.map((course, index) => (
            <CourseBox
              key={index}
              tutorImg={course.tutorImg}
              tutorName={course.tutorName}
              date={course.date}
              thumbImg={course.thumbImg}
              videos={course.videos}
              title={course.title}
            />
          ))}
        </div>
      </section>
    );
  };
  
export default CourseList;