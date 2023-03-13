import React from "react";
import '../../style.css';

function Contact(props) {
    return (
        <div className="index-background">
                <div className="contact-links">
                <h2>Contact</h2>
                    <a className="btn" href="mailto:graysonwwagner@gmail.com" role="button">
                        <img alt="email icon" src={"/portfolio/images/email.png"} style={{ width: 20 + "px" }} /> graysonwwagner@gmail.com</a>
                    <br />
                    <a className="btn" href="tel:651-285-2887" role="button">
                        <img alt="phone icon" src={"/portfolio/images/phone.png"} style={{ width: 20 + "px" }} /> 651-285-2887</a>
                    <br />
                    <a className="btn" href="https://www.github.com/graysonwwagner" target="_blank" role="button">
                        <img alt="github icon" src={"/portfolio/images/githubicon.png"} style={{ width: 20 + "px" }} /> github.com/graysonwwagner</a>
                </div>
        </div>
    );
}

export default Contact;
