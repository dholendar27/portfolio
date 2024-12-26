import { Fragment } from 'react';
import './MySkills.css';

export default function MySkills() {
    return (
        <Fragment>
            <div>
                <div id="skills" className="skills-header">
                    My <span>Skills</span>
                </div>
                <div className="skills-container">
                    <div className="skill">
                        <i className="fab fa-python"></i> <span>Python</span>
                    </div>
                    <div className="skill">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" width="30" height="30" />
                        <span>Django</span>
                    </div>
                    <div className="skill">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" width="30" height="30" />
                        <span>Flask</span>
                    </div>
                    <div className="skill">
                        <i className="fab fa-react"></i> <span>React JS</span>
                    </div>
                    <div className="skill">
                        <i className="fab fa-html5"></i> <span>HTML</span>
                    </div>
                    <div className="skill">
                        <i className="fab fa-css3-alt"></i> <span>CSS</span>
                    </div>
                    <div className="skill">
                        <i className="fab fa-js-square"></i> <span>JavaScript</span>
                    </div>
                    <div className="skill">
                        <i className="fab fa-docker"></i> <span>Docker</span>
                    </div>
                    <div className="skill">
                        <i className="fab fa-github"></i> <span>GitHub</span>
                    </div>
                    <div className="skill">
                        <i className="fab fa-linux"></i> <span>Linux</span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
