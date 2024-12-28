import { Fragment } from "react";
import { ReactComponent as UserIllustration } from "../assets/Banner.svg";
import "./Introduction.css";

export default function Introduction() {
    return (
        <Fragment>
            <section className="about-me-section">
                <div className="about-me-container">
                    <div className="about-me-text">
                        <h1 className="greeting-text">
                            Hello, I' am <span className="name">Dholendar Reddy</span>. <br />
                            <span className="position">
                                Python <span className="developer">Developer</span>
                            </span>
                        </h1>
                        <p className="intro-text">
                            I am passionate about programming, problem-solving, and web development. Currently, I work as a Junior Python Developer at ZKTeco,
                            where I develop automation solutions, scalable applications, and backend services. In addition to my Python expertise, I am also actively
                            involved in <b>web development</b>, working with front-end technologies like HTML, CSS, JavaScript, React Js, as well as back-end development using Python frameworks like Flask and Django.
                            I enjoy learning new technologies and applying them to real-world projects.
                        </p>
                        <div className="social-buttons">
                            <a
                                href="https://github.com/dholendar27"
                                className="github-button"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github"></i> GitHub
                            </a>
                        </div>
                    </div>
                    <div className="about-me-illustration">
                        <UserIllustration />
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
