import '../../components/Skill/skill.css'
import html from '../../assets/htmlicon.png'
import css from '../../assets/cssicon.png'
import javascript from '../../assets/javascript.gif'
import react from '../../assets/react.gif'
import java from '../../assets/java.gif'
import express from '../../assets/express.png'
import bootstrap from '../../assets/bootstrap.png'
import mongo from '../../assets/mongo.png'
import git from '../../assets/gitsmal.png'
function Skill() {
  return (
    <>
      <div className="skillheader">
        <div className="title">
          <h1>My <span className="skillcolor">Skills</span></h1>
        </div>
      </div>
      <div className="skills-section">
        <div className="skills-grid">
          {/* Define each skill here */}
          <div className="skill">
            <div className="skill-icon">
              <img src={html} alt="Skill 1" />
              <img src={css} alt="Skill 2" />
              <p>HTML | CSS</p>
            </div>

            <div className="skill-progress">
         
              <progress value="80" max="100"></progress>
            
            </div>
          </div>
          
          <div className="skill">
            <div className="skill-icon">
            <img src={javascript} alt="Skill 2" />
            <p>JavaScript</p>
            </div>
            <div className="skill-progress">
              <progress value="70" max="100"></progress>
              
            </div>
          </div>
          
          {/* Repeat similar blocks for each skill */}
          <div className="skill">
            <div className="skill-icon">
            <img src={java} alt="Skill 3" />
            <p>Java</p>
            </div>
            <div className="skill-progress">
              <progress value="90" max="100"></progress>
             
            </div>
          </div>

          <div className="skill">
            <div class="skill-icon">
            <img src={react} alt="Skill 4" />
            <p>React Native</p>
            </div>
            <div className="skill-progress">
              <progress value="70" max="100"></progress>
            </div>
          </div>
        </div>
      </div>
      <div className='subskills'>
     
      <div className='techskills'>
          <h>Libraries and FrameWork</h>
          <div className='subimgto'>
          <img src={express} alt="Ski4" />
          <img src={bootstrap} alt="Ski4" />
          </div>
      </div>
      <div className='techskills'>
          <h>Tools and Technologies</h>
          <div className='subimgto'>
          <img  src={mongo} alt="Ski4" />
          <img src={git} alt="Ski4" />
          </div>
      </div>
  
      </div>
    </>
  );
}

export default Skill;
