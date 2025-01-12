import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import JobList from './JobList'; 

const App = () => {
 return (
   <Router>  
     <main className="home">
     <Navbar />
       

       <div className="grid-container"> 
        <section class="section animation centered-text">
        <h1>Hi. I am Pallavi!</h1>
        <p className="text-size">I build dynamic, scalable solutions that merge cutting-edge technology with seamless user experiences. </p>        
        </section>
        </div>
        <div id="about" className="grid-container-intro">

         <div className="intro">
           <h1>About me!</h1>
          <p> I graduated from Northeastern University with MS in Information Systems and a 3.79 GPA.</p>
          <p>I have 4 years of industry experience as a Software Engineer at Testbook.com in Mumbai, India. </p>
          <p> I am skilled in writing well-designed, testable, and efficient code using modern best practices in web development.</p>
          <p>A fast learner, hard worker, and team player, I am proficient in a range of web development languages, frameworks, and tools. </p>
           <p> I'm open to Job opportunities where I can contribute, learn and grow.</p>      
             </div>

         <div className="skills">
           <h2>My Skills</h2>
           <div className="skills-grid">
            <span>Java</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Swift</span>
            <span>C</span>
            <span>Python</span>
            <span>React</span>
            <span>Redux</span>
            <span>Angular</span>
            <span>Azure App Service</span>
              <span>Azure Functions</span>
              <span>Cosmos DB</span>
              <span>Azure AI Studio</span>
              <span>Azure Storage</span>
             <span>HTML/HTML5</span>
             <span>CSS/CSS3</span>
             <span>Git</span>
             <span>GitHub</span>
           </div>
         </div>
         </div>

        <div className="work-color">
          <h2 className="work-style">Professional work experience</h2>
        <JobList />
        </div>      
      <div id="projects" className="color-project">
      <div className="work-color">
          <h2 className="work-style">Projects</h2>
          </div>
      <div className="project-showcase-container1">
        <div className="image-section">
          <img src="/images/machine-learning-project.png" alt="Project image1" />
        </div>

        <div className="text-section">
          <h1 className="font-style">Diabetes Prediction Watch</h1>
          <p className="font-style">
          Cleaned, performed EDA, balanced the Behavioral Risk Factor Surveillance System (BRFSS) dataset using NearMiss, visualized it, and implemented and calibrated six supervised machine learning algorithms, tuning hyperparameters and evaluating performance using accuracy and root mean squared error (RMSE) metrics.          </p>
        </div>
      </div>
      <div className="project-showcase-container">
        <div className="image-section">
          <img src="/images/seattle-tour-guide-project.png" alt="Project image2" />
        </div>

        <div className="text-section">
          <h1 className="font-style">Seattle tour guide</h1>
          <p className="font-style">
          Developed a responsive full-stack web application, utilizing React and JavaScript for dynamic front-end rendering, and NodeJS for building RESTful APIs on the server-side          </p>
        </div>
      </div>
      <div className="project-showcase-container">
        <div className="image-section">
          <img src="/images/student-management-system-project.png" alt="Project image3" />
        </div>

        <div className="text-section">
          <h1 className="font-style">Student Management System</h1>
          <p className="font-style">
          Established an enterprise-level management system using Java, MySQL, JDBC, and service-oriented architecture, effectively managing 95% of academic and personal student information          </p>
        </div>
      </div>
      </div> 
    <section>
    {/* <div className="wrapper">
           <button className="custom-button">Download my Resume</button>
      </div> */}
    </section>
     </main>
   </Router>
 );
};

export default App;



