import "./About.css";
import img from "../../assets/liza.jpg";

export default function About() {
  return (
    <div className="About">
      {/* <h1>About</h1> */}
      <div className="section">
        <div className="container">
          <div className="content-section">
          <div className="title">
            <h1>About</h1>
          </div>
          <div className="content">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit illum animi asperiores id. Accusantium cupiditate adipisci pariatur est dignissimos, quibusdam aliquam? Consequatur quod ipsam soluta maxime nemo. Quidem, quibusdam doloribus.
              Doloribus delectus distinctio magnam debitis adipisci eveniet tempore, quasi, vitae animi quaerat nostrum consectetur aspernatur laudantium dolores aliquam incidunt unde non at consequuntur. Quidem quibusdam consequatur voluptatem. Quasi, mollitia reprehenderit?
              </p>

            <div className="button">
              <a href="">Read more</a>
            </div>
          </div>
          <div className="social">
            <a href=""><i className="fab fa-facebook-f"></i></a>
            <a href=""><i className="fab fa-twitter-f"></i></a>
            <a href=""><i className="fab fa-instagram-f"></i></a>
          </div>
        </div>
        
        <div className="image-section">

          <img src={img} alt="img" />
        </div>

      </div>
</div>





      
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