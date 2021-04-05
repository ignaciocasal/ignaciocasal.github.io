import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = props => {
    if (!props.data) return null;

    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <SocialLinks networks={props.data.social}/>
                </div>
            </div>
            <div id="go-top">
                <a className="smoothscroll" title="Back to Top" href="#home">
                    <i className="icon-up-open"/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
