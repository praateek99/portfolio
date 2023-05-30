import React from 'react';
import './portfolio.css';
class MyPortfolio extends React.Component {
  render() {
    return(

      
    
<body>
  <header>
    <nav>
      <div class="container">
        
        <ul class="menu">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>

  <main>
    <section id="about">
      <div class="container">
        <h2>About Me</h2>
       
        <p>I'm an aspiring devops engineer. With bachelors in computer science and masters in information technology management I've created a strong foundation with several projects and certifications along with my degrees</p>
      </div> 
    </section>

    <section id="experience">
      <div class="container">
        <h2>Experience</h2>
        <div class="experience-item">
          <h3>Full stack intern</h3>
          <h4>Kognitive</h4>
          <p>Jan 2021-May 2023</p>
          <ul>
            <li>Co-developed the company's website using react.js</li>
            <li>Worked on AWS serverless services, Lambda, Dynamo DB, Lex</li>
            <li>Created chatbots using Lex and integrated to Facebook messenger</li>
            <li>Used version control with git for code deployement, merging and creating pull requests</li>
            <li>Worked on REST API's for CRUD operations</li>
            
          </ul>
        </div>
        
        
            <div class="experience-item">
              <h3>Trainee Engineer</h3>
              <h4>Phoenix Global</h4>
              <p>Apr 2020-May 2020</p>
              <ul>
                <li>Worked on python for Data Analytics</li>
                <li>Worked on Business Intelligence tools, Tableau and Power BI</li>
                <li>Created Tableau dashboards for Covid-19 Tracker in India</li>
                <li>Created a dashboard for Financial analysis of businesses across different sectors in different countries</li>
            </ul>
        </div>
      </div>
    </section>

    <section id="education">
      <div class="container">
        <h2>Education</h2>
        <div class="education-item">
          <h3>masters in Information Technology Management</h3>
          <h4>Webster University</h4>
          <p>Jan 2023-Dec 2023</p>
        </div>
        
        <div class="education-item">
            <h3>Bachelors of Technology in Computer Science</h3>
            <h4>Gitam University</h4>
            <p>June 2017-June 2021</p>
          </div>
      </div>
    </section>

    <section id="skills">
      <div class="container">
        <h2>Skills</h2>
        <ul class="skills-list">
          <li>programming languages - Python, C, C++</li>
          <li>Cloud technologies - AWS(EC2, Lambda, Lex, DynamoDB, IAM, S3, CloudFront)</li>
          <li>Version control with GIT</li>
          <li>database - mysql, nosql-mongo db,postgre sql</li>
          <li>web technologies and frameworks - html, css,  js, react.js</li>
         
        </ul>
      </div>
    </section>

    <section id="projects">
      <div class="container">
        <h2>Projects</h2>
        <div class="project-item">
          <h3>Loan approval prediction</h3>
          <p>This is a machine learning model which predicts approval of loan</p>
        </div>
        
        <div class="project-item">
        <h3>Stock price prediction</h3>
        <p>This machine learning model is used to predict stock price of any given company</p>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="container">
        <h2>Contact</h2>
        <p>email - mailtopraateek@gmail.com <br></br>
            mobile- (614-812-9127)
        </p>
      </div>
    </section>
  </main>



  
</body>
    
     ) ;
  }
}

export default MyPortfolio;
