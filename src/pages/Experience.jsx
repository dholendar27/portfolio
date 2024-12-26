import { Fragment } from "react";
import "./Experience.css"
import {ReactComponent as ZKTecoLogo } from "../assets/zkteco-logo-vector.svg"
export default function Experience() {
    return (
        <Fragment>
            <div id="experience" className="experience-container">
                <div className="experience-header"> My <span>Experience</span></div>

                <div className="experience-cards-container">
                    <div className="experience-card present">
                        <div className="experience-card-header ">
                            <div className="experience-info">
                                <ZKTecoLogo  className="company-logo"/>
                                <h4>Junior Python Developer</h4>
                            </div>
                            <div className="duration">
                                20-oct-2023 - Present
                            </div>
                        </div>

                        <div className="experience-description">
                            <span>
                            As a Junior Python Developer at ZKTeco, I contributed to the development and optimization of web applications, working closely with cross-functional teams. My focus was on building efficient backend systems using Python, as well as enhancing user interfaces for improved web experiences. I helped integrate features and improve application performance, ensuring seamless and scalable solutions for both internal teams and end-users.
                            </span>
                        </div>
                    </div>

                    <div className="experience-card">
                        <div className="experience-card-header ">
                            <div className="experience-info">
                                <ZKTecoLogo  className="company-logo"/>
                                <h4>Python Trainee</h4>
                            </div>
                            <div className="duration">
                                20-oct-2022 - 20-oct-2023
                            </div>
                        </div>

                        <div className="experience-description">
                            <span>
                            As a Junior Python Developer at ZKTeco, I contributed to the development and optimization of web applications, working closely with cross-functional teams. My focus was on building efficient backend systems using Python, as well as enhancing user interfaces for improved web experiences. I helped integrate features and improve application performance, ensuring seamless and scalable solutions for both internal teams and end-users.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}