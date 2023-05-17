import "./Home.css";
import video from "../pages/Korkunov.mp4";


export default function Home() {
  return (
    <div className="Home">

<div className="video-bg">
  <video loop="loop" controls="contronls">
  <source src={video} />
  </video>
  {/* { <div className="effects">

  </div> } */}
  <div className="video-bg_content">
    <h1>Sweets</h1>

  </div> 
</div>


<div className="main">
  <h2>Welcome</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus officia pariatur iusto dolorum iste, quam ut accusamus. Soluta eaque officiis possimus dolores veritatis, consequatur aspernatur! Eaque non iure ex maxime.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe cumque est sint id deserunt itaque, fuga voluptates nesciunt nobis quas, officia quidem molestiae quia iste possimus similique, nihil vel aspernatur.
    Velit quidem magni iste aliquam ut quam labore ad. Deserunt ipsum optio dolor, unde soluta iusto quo laborum iste molestias corporis, minima eaque, enim quod officiis dignissimos accusantium id possimus.
    Earum rerum, tempore deserunt fugit accusantium at quos numquam quod beatae delectus sunt aperiam, tempora facere! Dolores error obcaecati dolorem nemo sed, pariatur deserunt itaque provident assumenda, aperiam molestias natus?
    Laudantium cumque facilis quisquam modi et delectus porro sequi alias, placeat corporis culpa repudiandae aut iste, consequuntur quod officia necessitatibus quam, veniam eveniet blanditiis cupiditate! Cumque rerum doloribus et asperiores!
    Saepe obcaecati magni maiores in! Odit necessitatibus consequatur magni exercitationem asperiores corporis minima iure, facere sunt nobis ipsam fugit distinctio, tempora libero placeat! Distinctio aliquid blanditiis fugit quam quo expedita.
  </p>
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