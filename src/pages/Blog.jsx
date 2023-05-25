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
              <h1><a href="#">New items and menu updates</a></h1>
            </div>
            <div className="blog-text">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ex deserunt provident! Eum, dolores dolorem nemo eligendi delectus laborum at consequatur incidunt distinctio facilis fugiat nulla, porro tenetur non necessitatibus.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laudantium dolore inventore explicabo soluta accusamus quo nam officiis? Earum corporis deserunt dignissimos distinctio ex! Ex doloremque explicabo laudantium nobis voluptate.
                Veritatis quidem cupiditate aliquid impedit magni natus, error possimus quasi itaque tenetur. Mollitia exercitationem beatae fugit necessitatibus soluta amet repellendus quo maiores vel laborum, nostrum deserunt porro explicabo rem commodi!
                Quod, corporis quos in provident quasi aperiam officia iste esse ad ratione animi laborum dicta quae temporibus! Labore vel earum repellendus, aut, natus fuga maiores alias dolore enim iste voluptate.
              </p>
            </div>
            <div className="blog-tags">
              <ul>
                <li><a href="#">news</a></li>
                <li><a href="#">history</a></li>
                <li><a href="#">sensation</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#"></a></li>
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
      <footer>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
      <h3>About Us</h3>
        <p>We have been selling sweets for over 10 years and are always ready to please our customers.</p>
      </div>
      <div class="col-md-4">
        <h3>Contacts</h3>
        <p>city Bishkek st. Imanbaieva 40 mikroraion 12 </p>
        <p>Phone: (+996) 702 02 85 45</p>
        <p>Email: zhanybaevasaikal@gmail.com</p>
      </div>
      <div class="col-md-4">
        <h3>Follow us</h3>
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </div>
</footer>

    </div>



  );
}