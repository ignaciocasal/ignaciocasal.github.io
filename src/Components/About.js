import React, { Component } from "react";

class About extends Component {
  render() {
    if (!this.props.data) return null;
    const profilepic = "images/" + this.props.data.image;
    const {bio, bio2} = this.props.data;
    const {resumedownload} = this.props.data;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt="Profile Pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <p>{bio2}</p>
            <div className="row">
              <div className="centered columns download">
                <p>
                  <a href={resumedownload} target="_blank" className="button">
                    <i className="fa fa-download"/>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
