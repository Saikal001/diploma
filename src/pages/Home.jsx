import "./Home.css";
import videoo from "../pages/videoplayback.mp4";


export default function Home() {
  return (
    <div className="Home">

<div className="video-bg">
  <video src="video-bg.mp4" type="video/mp4" autoplay muted loop>
    <div className="effects">

    </div>
  <source src={videoo} />
  </video>
  <div className="video-bg_content">
    <h1>Sweet</h1>

  </div>
</div>


<div className="main">
  <h2>Welcome</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus officia pariatur iusto dolorum iste, quam ut accusamus. Soluta eaque officiis possimus dolores veritatis, consequatur aspernatur! Eaque non iure ex maxime.</p>
</div>




















{/* <video>
  <source src={videoo} />
</video> */}














      {/* <form>
      <p><input type="button" value="Start for free" /></p>
      </form> */}


      {/* <h1><b>Welcome to my Sweets shop</b></h1>
      <p><strong> This is my awesome Sweets shop</strong></p>
      <p><strong>There are different types of sweets</strong></p> */}
    
  
</div>
      
      
      
      );
      }