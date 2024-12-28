import { Fragment } from "react";
import "./Projects.css";
import { SquareArrowOutUpRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
export default function Projects() {
  const navigate = useNavigate();

  let openPage = (path) => {
    navigate(path)  
  }

  return (
    <Fragment>
      <div className="project-container" id="projects">
        <div className="project-header">Projects</div>

        <div className="project-card">
          <div className="project-image">
          </div>
          <div className="project-info">
            <h3>01</h3>
            <span className="project-title">easy TimePro</span>
            <p className="project-description">Easy TimePro is a robust and scalable web-based Time & Attendance Management System designed to manage data for up to 10,000 employees on a single platform. The system streamlines operations like attendance tracking, payroll integration, and reporting while offering a user-friendly and secure interface.</p>
            <SquareArrowOutUpRight onClick={() => {openPage('projects/Easytimepro')}}/>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image"></div>
          <div className="project-info">
            <h3>02</h3>
            <span className="project-title">Sundial</span>
            <p className="project-description">Sundial is a versatile cross-platform application designed to monitor user activity by detecting the applications they use. The collected data is seamlessly synced to the Ralvie.ai SaaS platform for further analysis and insights. The application provides a powerful solution for businesses to track productivity and application usage patterns across devices.</p>
            <SquareArrowOutUpRight onClick={() => {openPage('projects/sundial')}}/>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image"></div>
          <div className="project-info">
            <h3>03</h3>
            <span className="project-title">Ralvie.ai</span>
            <p className="project-description">Ralvie.ai is a state-of-the-art Software-as-a-Service (SaaS) platform designed to provide detailed insights into user application usage and behavior. By collecting and analyzing data from applications like Sundial, it offers organizations a centralized dashboard to monitor productivity, optimize workflows, and enhance decision-making processes.</p>
            <SquareArrowOutUpRight onClick={() => {openPage('projects/ralvie')}}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
