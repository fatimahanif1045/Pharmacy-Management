import React from 'react';
import '../style/style.css';
import logo from '../favicon.png';
import '../App.css';

function AboutUs() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>

            <div className="main">
                <h3 style={{ textAlign: 'center' }}>About Us</h3>
                <hr />

                <p>
                    Welcome to our Healthcare Management System. Our platform is designed to streamline and
                    integrate various healthcare operations including patient management, physician coordination,
                    prescription tracking, inventory monitoring, and billing.
                </p>

                <p>
                    We are committed to improving healthcare delivery by providing a reliable, secure, and user-friendly
                    system that helps medical professionals and administrative staff work more efficiently.
                </p>

                <p>
                    Our mission is to leverage technology to enhance patient care and simplify medical workflows.
                    With a focus on accuracy, accessibility, and data-driven insights, we aim to be a trusted partner
                    for healthcare providers and institutions.
                </p>

                {/* Team Section */}
                <h4>Our Team</h4>
                <ul>
                    <li><strong>Fatima Hanif</strong> – Lead Software Engineer</li>
                    <li><strong>Dr. Ayesha Khan</strong> – Chief Medical Advisor</li>
                    <li><strong>Sophia Lee</strong> – Product Manager</li>
                    <li><strong>Fatima Hanif</strong> – UX Designer</li>
                </ul>

                {/* Optional Image 
                <div style={{ margin: '20px 0' }}>
                    <img
                        src="/images/team-placeholder.jpg" // replace with your actual image path
                        alt="Our Team"
                        style={{ width: '100%', maxWidth: '600px', height: 'auto', display: 'block', margin: '0 auto' }}
                    />
                </div>*/}

                {/* Contact Info */}
                <h4>Contact Us</h4>
                <p>Email: <a href="mailto:info@healthsystem.com">info@healthsystem.com</a></p>
                <p>Phone: +1 (800) 123-4567</p>
                <p>Address: 123 Health St, Wellness City, Country</p>
            </div>
        </>
    );
}

export default AboutUs;
