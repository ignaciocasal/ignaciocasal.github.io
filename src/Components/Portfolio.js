import React, {Component} from "react";
import Zmage from "react-zmage";
import Skill from "./Skill";
import LinkButton from "./LinkButton";

let id = 0;

class Portfolio extends Component {
    render() {
        if (!this.props.data) return null;

        const projects = this.props.data.projects.map(function (projects) {
            let projectImage = "images/portfolio/" + projects.image;

            return (
                <div key={id++} className="columns portfolio-item">
                    <div className="item-wrap">
                        <Zmage alt={projects.title} src={projectImage}/>
                        <div style={{textAlign: "center"}}>{projects.title}</div>
                    </div>
                </div>
            );
        });

        const projectSkills = (project) => {
            if (!project.skills) {
                return
            }
            return project.skills.map(skill => {
                return <Skill icon={skill.icon} key={id++}/>
            });
        }

        const actions = (project) => {
            return (
                <div className="actions-wrapper">
                    <li>
                        <LinkButton className="project-btn" icon='globe' text='View Demo' url={project.demo}/>
                    </li>
                    <li>
                        <LinkButton className="github-btn" icon='github' text='Sourcecode' url={project.sourcecode}/>
                    </li>
                </div>
            )
        }

        const projects2 = this.props.data.projects.map(project => {
            let projectImage = "images/portfolio/" + project.image;

            return (
                <div key={id++} className="article-wrapper">
                    <article className="col-12 col-12-xsmall work-item">
                        <div>
                            {/*<Zmage alt={project.title} src={projectImage} className="image fit thumb"/>*/}
                            <img src={projectImage} alt={project.title} className="image fit thumb"/>
                        </div>
                        <div className="art-description">
                            <div className="text-wrapper">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            <ul className="actions">
                                {actions(project)}
                                <div className="languages">
                                    {projectSkills(project)}
                                </div>
                            </ul>
                        </div>
                    </article>
                </div>
            );
        });

        return (
            <section id="portfolio">
                <div className="row projects">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>

                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {projects2}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
