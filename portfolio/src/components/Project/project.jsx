import '../Project/project.css'
import sugoi from '../../assets/newsugoi.png'
function Project(){
    return(
        <>
        <div className="projheader">
            <div className="title">
                <h1>My <span className="skillcolor">Projects</span></h1>
            </div>
        </div>
        <div className='mainprojbox'>
        
        <div className='projdisplay'>
        <div className="slider">
      
        <div className="slide" >
        <div className='content'>
                <img src={sugoi} alt="logo" />
                <div className="proj-info">
                        <p>Ecommerce Application</p>  
                    </div>
                    </div>
                </div>
        
                <div className="slide">
                <div className='content'>
                <img src={sugoi} alt="logo" />
                <div className="proj-info">
                        <p>Project 2</p>  
                    </div>
                    </div>
                </div>
        
                <div className="slide">
                <div className='content'>
                <img src={sugoi} alt="logo" />
                <div className="proj-info">
                        <p>Project 3</p>  
                    </div>
                    </div>
                </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Project