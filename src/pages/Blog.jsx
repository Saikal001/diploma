import CategoryList from "../components/CategoryList/CategoryList";
import "./Blog.css";


export default function Blog() {
  return (
    <div className="Blog">
                   <main>
                    <div className="blog-container">
                    <div className="blog-header">
                    <div className="blog-cover">
13.05.2023

                      </div>
                      </div>
                      <div className="blog-body">
                        <div className="blog-title">
                          <h1><a href="#">Lorem ipsum dolor sit amet.</a></h1>
                        </div>
<div className="blog-text">
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ex deserunt provident! Eum, dolores dolorem nemo eligendi delectus laborum at consequatur incidunt distinctio facilis fugiat nulla, porro tenetur non necessitatibus.</p>
</div>
<div className="blog-tags">
  <ul>
    <li><a href="#">lorem1</a></li>
    <li><a href="#">lorem2</a></li>
    <li><a href="#">lorem3</a></li>
    <li><a href="#">lorem4</a></li>
    <li><a href="#">lorem5</a></li>
    </ul>
</div>
                      </div>
                      <div className="blog-footer">
                        <ul>
                          <li className="published-date">4 days ago</li>
                        </ul>
                      </div>
                    </div>
                    </main>   

      
    </div>



  );
}