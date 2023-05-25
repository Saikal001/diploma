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
      <section class="signup-section" id="signup">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-10 col-lg-8 mx-auto text-center">
                        <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 class="text-white mb-5">Subscribe to receive updates!</h2>
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
                    {/* <a class="mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                    <a class="mx-2" href="#!"><i class="fab fa-github"></i></a> */}
{/* 
                    <img src={tw} alt="" />   */}
                </div>
            </div>
        </section>
      
        <footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5"> My Website 2023</div></footer>

    </div>



  );
}