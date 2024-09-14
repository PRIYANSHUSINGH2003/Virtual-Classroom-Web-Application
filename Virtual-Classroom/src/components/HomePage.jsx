import React from 'react';
import { Link } from 'react-router-dom'; // Make sure this import is included
import '../components/css/style.css'; // Ensure this path is correct


const HomePage = () => {
    return (
        <section className="home">
            <h1 className="heading">Welcome to Educa</h1>
            <div className="content">
                <h2>Explore Our Courses</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <Link to="/courses" className="btn">See Courses</Link>
            </div>
        </section>
    );
};

export default HomePage;
