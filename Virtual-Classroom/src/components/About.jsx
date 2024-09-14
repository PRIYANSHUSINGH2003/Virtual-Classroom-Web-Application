import React from 'react';
import '../components/css/style.css'; // Ensure this path is correct

const About = () => {
    return (
        <section className="about">
            <h1 className="heading">About Us</h1>
            <div className="row">
                <div className="image">
                    <img src="path_to_your_image.jpg" alt="About Us" /> {/* Update with the actual image path */}
                </div>
                <div className="content">
                    <h2>Our Mission</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Integer in fringilla lorem. Duis quis dui et ex fringilla interdum non at magna. Vivamus bibendum, lorem eget pretium pharetra, ligula odio vehicula augue, eget fermentum turpis libero in neque.</p>
                    
                    <h2>Our Vision</h2>
                    <p>Donec ac rhoncus odio. Ut ultricies purus vel lacinia fringilla. Suspendisse potenti. Nulla facilisi. Duis fermentum, mauris et sollicitudin consectetur, orci dolor auctor erat, vel dignissim tortor lacus a libero. Vestibulum ut orci ligula. Proin eget fringilla mauris.</p>
                    
                    <h2>Contact Us</h2>
                    <p>Curabitur nec libero et nisl gravida tristique. Fusce ut velit id erat iaculis auctor. Morbi fringilla turpis id nunc posuere, a auctor magna vestibulum. Praesent luctus auctor massa vel dictum. Sed a erat id eros suscipit interdum.</p>
                    <address>
                        <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
                        <p>Phone: +1 (123) 456-7890</p>
                        <p>Address: 123 Main Street, Anytown, USA</p>
                    </address>
                </div>
            </div>
            <div className="box-container">
                <div className="box">
                    <i className="fas fa-briefcase"></i>
                    <div>
                        <h3>Service 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="box">
                    <i className="fas fa-cogs"></i>
                    <div>
                        <h3>Service 2</h3>
                        <p>Donec ac rhoncus odio. Ut ultricies purus vel lacinia fringilla.</p>
                    </div>
                </div>
                <div className="box">
                    <i className="fas fa-users"></i>
                    <div>
                        <h3>Service 3</h3>
                        <p>Curabitur nec libero et nisl gravida tristique. Fusce ut velit id erat iaculis auctor.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
