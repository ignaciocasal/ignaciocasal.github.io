import React, {Component} from "react";
import Skill from "./Skill";

class Resume extends Component {
    render() {
        if (!this.props.data) return null;

        const education = this.props.data.education.map(function (education) {
            return (
                <div key={education.degree}>
                    <h3>{education.degree}</h3>
                    <p className="info">
                        from {education.school}
                        <span>&bull;</span>
                        <em className="date">{education.graduated}</em>
                    </p>
                    <p>{education.description}</p>
                </div>
            );
        });

        const work = this.props.data.work.map(function (work) {
            return (
                <div key={work.company}>
                    <h3>{work.title}</h3>
                    <p className="info">
                        at {work.company}
                        <span>&bull;</span>
                        <em className="date">{work.years}</em>
                    </p>
                    <p>{work.description}</p>
                </div>
            );
        });

        const skills = (
            <div className="languages skills show-on-scroll">
                <Skill icon='devicon-react-plain-wordmark'/>
                <Skill icon='devicon-redux-plain'/>
                <Skill icon='devicon-angularjs-plain'/>
                <Skill icon='devicon-javascript-plain'/>
                <Skill icon='devicon-jest-plain'/>
                <Skill icon='devicon-git-plain-wordmark'/>
                <Skill icon='devicon-webpack-plain-wordmark'/>
                <Skill icon='devicon-html5-plain-wordmark'/>
                <Skill icon='devicon-css3-plain-wordmark'/>
                <Skill icon='devicon-sass-original'/>
            </div>
        );

        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">{education}</div>
                        </div>
                    </div>
                </div>

                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">{work}</div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <section id="four" className="skills">
                            {skills}
                        </section>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
