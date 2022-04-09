import React, {Component} from "react";
import LinkButton from "./LinkButton";
import {Label} from "semantic-ui-react";

let id = 0;

class Portfolio extends Component {
    render() {
        if (!this.props.data) return null;

        const techStack = (project) => {
            if (!project.skills) {
                return
            }
            return project.skills.map(skill => {
                return <Label color={skill.color} key={id++}>{skill.name}</Label>
            });
        }

        const actions = (project) => {
            return (
                <div className="actions-wrapper">
                    {project.demo && <li>
                        <LinkButton className="project-btn" icon='globe' text='View Demo' url={project.demo}/>
                    </li>}
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
                        <div className="image fit thumb">
                            {/*<Zmage alt={project.title} src={projectImage} className="image fit thumb"/>*/}
                            <img src={projectImage} alt={project.title}/>
                        </div>
                        <div className="art-description">
                            <div className="text-wrapper">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            <Label.Group size='big'>
                                {techStack(project)}
                            </Label.Group>
                            <ul className="actions">
                                {actions(project)}
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
