import React from "react";

class Contact extends React.Component{
    render(){
        return(
            <section id="contactSection">
                <div className="contactBox">
                    <p>Get in touch!</p>
                    <h1>Contact</h1>
                </div>
                <div className="contactInfo">
                <p>Email: eriksson.jenny97@gmail.com</p>
                </div>
                <div className="siteByInfo">
                    <h4>Site by</h4>
                    <p>Judith Gammelli</p>
                </div>
            </section>
        );
    }
}

export default Contact;