import '../Project/project.css'; // Import project-specific CSS
import sugoi from '../../assets/newsugoi.png'; // Import project logo image

function Project() {
  return (
    <>
      <div className="projheader">
        <div className="title">
          <h1>My <span className="skillcolor">Projects</span></h1>
        </div>
      </div>

      <div className="mainprojbox">
        <div className="projdisplay">
          <div className="slider">
            <div className="slide">
              <div className="content">
                <img src={sugoi} alt="Project Logo" />
                <p>Ecommerce Application</p>              
              </div>
            </div>

            <div className="slide">
              <div className="content">
                <img src={sugoi} alt="Project Logo" />
                <p>Project 2</p>
                
              </div>
            </div>

            <div className="slide">
              <div className="content">
                <img src={sugoi} alt="Project Logo" />
                <p>Project 3</p>
                
              </div>
            </div>
            
          </div>
          <div className='detailbutton'>
            <a href="/projdetail">View Details</a>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Project;

{/** <div className='hovercontent'>
                    <a href="">View more</a>
</div>*/
}