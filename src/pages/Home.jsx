import "./Home.css";
import video from "../components/istockphoto-469925451-640_adpp_is.mp4";
import img from "../assets/sweets.jpg";
import img2 from "../assets/choco.jpg";
import img3 from "../assets/drinks.jpg";
import img4 from "../assets/kit-kat.jpg";
import tw from "../assets/twitter.jpg";

export default function Home() {
  return (
    <div className="Home">

{/* <div className="video-bg">
  <video loop="loop" controls="contronls">
  <source src={video} />
  </video>
  {/* { <div className="effects">

  </div> } */}
  {/* <div className="video-bg_content">
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
</div> */}



<header class="masthead">
  
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                        <h1 class="mx-auto my-0 text-uppercase">Sweets</h1>
                        <h2 class="text-white-50 mx-auto mt-2 mb-5">All kinds of sweets shop for you sweet lovers.</h2>
                      <a class="btn btn-primary" href="#about">Get Started</a>
                    </div>
                </div>
            </div>
        </header>
        {/* <!-- About--> */}
        <section class="about-section text-center" id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8">
                        <h2 class="text-white mb-4">Created by me</h2>
                        <p class="text-white-50">
                          
                        If you want to get more information about my sweet shop, you can contact me below my contacts.
                        </p>
                    </div>
                </div>
                <img class="img-fluid" src={img2} alt="..." />
            </div>
        </section>
        {/* <!-- Projects--> */}
        <section class="projects-section bg-light" id="projects">
            <div class="container px-4 px-lg-5">
                {/* <!-- Featured Project Row--> */}
                <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src={img4} alt="..." /></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <h4>Part of the store</h4>
                            <p class="text-black-50 mb-0">Various information is also provided.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Project One Row--> */}
                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={img} alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Variety</h4>
                                    <p class="mb-0 text-white-50">Here are all kinds of sweets of the world</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Project Two Row--> */}
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={img3} alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Beverages</h4>
                                    <p class="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Signup--> */}
        <section class="signup-section" id="signup">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-10 col-lg-8 mx-auto text-center">
                        <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 class="text-white mb-5">Subscribe to receive updates!</h2>
                        {/* <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!--> */}
                        <form class="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">
                            {/* <!-- Email address input--> */}
                            <div class="row input-group-newsletter">
                                <div class="col"><input class="form-control" id="emailAddress" type="email" placeholder="Enter email address..." aria-label="Enter email address..." data-sb-validations="required,email" /></div>
                                <div class="col-auto"><button class="btn btn-primary disabled" id="submitButton" type="submit">Notify Me!</button></div>
                            </div>
                            <div class="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">An email is required.</div>
                            <div class="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">Email is not valid.</div>
                            {/* <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted--> */}
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3 mt-2 text-white">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://saikal-zhanybaeva.netlify.app/">https://saikal-zhanybaeva.netlify.app/</a>
                                </div>
                            </div>
                            {/* <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form--> */}
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3 mt-2">Error sending message!</div></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Contact--> */}
        <section class="contact-section bg-black">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Address</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">city Bishkek st. Imanbaieva 40 mikroraion 12 </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Email</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50"><a href="#!">zhanybaevasaikal@gmail.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Phone</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">(+996) 702 02 85 45</div>
                                <div class="small text-black-50">(+996) 702 02 86 45</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="social d-flex justify-content-center">
                    <a class="mx-2" href="#!"><i class="fab fa-twitter"><img src={tw} alt="" /></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-facebook-f"><img src={tw} alt="" /></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-github"><img src={tw} alt="" />  </i></a>
                </div>
            </div>
        </section>
      
        <footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5">Copyright &copy; Your Website 2023</div></footer>
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
         {/* <!-- Footer--><!-- Core theme JS-->
        <script src="js/scripts.js"></script>
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <!-- * *                               SB Forms JS                               * *-->
        <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>



 












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