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
          <section className="section animation centered-text">
            <h1>Hi. I am Pallavi!</h1>
            <p className="text-margin">A Full-Stack Developer with over 4 years of experience</p>
            <p className="text-margin-bottom">crafting seamless web and mobile experiences using React, Flutter, Angular, and AWS.</p>
            <div className="cta-section">
              <a href="#projects" className="cta-button project-text">See My Projects | </a>
              <a href="#contact" className="cta-button-secondary project-text">Let's Work Together</a>
            </div>
          </section>
        </div>

        <div id="about" className="grid-container-intro">
          <div className="intro">
            <h1>About me!</h1>
            <p>Hey, I’m Pallavi — a passionate full-stack SOFTWARE ENGINEER with 4 years of experience and a MS degree in Information Systems from Northeastern University. I craft sleek web apps, intuitive mobile experiences, and cloud-ready solutions using React, Node.js, Flutter, AWS, and Azure.</p>
            <p>Driven by curiosity and a love for clean, scalable code, I thrive on turning complex problems into elegant, high-impact solutions — and I'm always exploring what’s next in tech.</p>
          </div>

          <div className="skills">
            <h2>My Skills</h2>
            <div className="skills-grid">
              <span>Java</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>React</span>
              <span>Redux</span>
              <span>Angular</span>
              <span>HTML/HTML5</span>
              <span>CSS/CSS3</span>
              <span>Swift</span>
              <span>Python</span>
              <span>C</span>
              <span>AWS</span>
              <span>Azure App Service</span>
              <span>Azure AI Studio</span>
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

          <div className="card-scroll-wrapper">
            <div className="card-container">
              <div class="wrap animate pop card-margin">
                <div class="overlay">
                  <div class="overlay-content animate slide-left delay-2">
                    <h1 class="animate slide-left pop delay-4">Diabetes Prediction Watch</h1>
                    {/* <p class="animate slide-left pop delay-5" >
				Kingdom: <em>Plantae</em>
			</p> */}
                  </div>
                  <div class="image-content-card1 animate slide delay-5"></div>
                  <div class="dots animate">
                    <div class="dot animate slide-up delay-6"></div>
                    <div class="dot animate slide-up delay-7"></div>
                    <div class="dot animate slide-up delay-8"></div>
                  </div>
                </div>
                <div class="text1">
                  <p>
                  The Behavioral Risk Factor Surveillance System (BRFSS) dataset was cleaned, explored through EDA, and balanced using the NearMiss technique to address class imbalance and ensure fair model evaluation.
                  </p>
                  <p>
                    A total of six supervised machine learning algorithms were implemented and calibrated. Each model underwent hyperparameter tuning to optimize performance.
                  </p>
                  <p>
                    Model effectiveness was evaluated using key metrics including accuracy and root mean squared error (RMSE), providing a comprehensive view of predictive quality.
                  </p>

                </div>
              </div>

              {/* card 2 */}

              <div class="wrap animate pop card-margin">
                <div class="overlay">
                  <div class="overlay-content animate slide-left delay-2">
                    <h1 class="animate slide-left pop delay-4">Seattle Tour Guide</h1>
                  </div>
                  <div class="image-content-card2 animate slide delay-5"></div>
                  <div class="dots animate">
                    <div class="dot animate slide-up delay-6"></div>
                    <div class="dot animate slide-up delay-7"></div>
                    <div class="dot animate slide-up delay-8"></div>
                  </div>
                </div>
                <div class="text1">
                <p>
  Developed a responsive full-stack web application.
</p>
<p>
  Utilized React and JavaScript for dynamic front-end rendering.
</p>
<p>
  Built RESTful APIs on the server-side using NodeJS.
</p>  
                </div>
              </div>
              {/* card 3 */}
              <div class="wrap animate pop card-margin">
                <div class="overlay">
                  <div class="overlay-content animate slide-left delay-2">
                    <h1 class="animate slide-left pop delay-4">Student Management System</h1>
                  </div>
                  <div class="image-content-card3 animate slide delay-5"></div>
                  <div class="dots animate">
                    <div class="dot animate slide-up delay-6"></div>
                    <div class="dot animate slide-up delay-7"></div>
                    <div class="dot animate slide-up delay-8"></div>
                  </div>
                </div>
                <div class="text1">
                <p>
  Established an enterprise-level management system.
</p>
<p>
  Used Java, MySQL, JDBC, and service-oriented architecture.
</p>
<p>
  Effectively managed 95% of academic and personal student information.
</p>

                </div>
              </div>
            </div>
          </div>
        </div>


        <section className="contact-section" id="contact">
          <div className="contact-container">
            <h2>Get In Touch</h2>
            <p>
              Have a project in mind? Let's discuss how I can help you bring it to life.
            </p>
            <a href="mailto:pallavideogade4@gmail.com" className="contact-button">
              Contact Me
            </a>
          </div>
        </section>
      </main>
    </Router>
  );
};

export default App;



