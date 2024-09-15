import { Route, Switch } from "wouter";
import Nav from "./Nav";
import "./app.css";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Events from "./Events";
import Join from "./Join";

export function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/join" component={Join} />
        <Route path="/contact" component={Contact} />
      </Switch>
      {/* <section class="testimonials text-center bg-light">
        <div class="container">
          <h2 class="mb-5">What people are saying...</h2>
          <div class="row">
            <div class="col-lg-4">
              <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  class="img-fluid rounded-circle mb-3"
                  src={testimonial1}
                  alt="..."
                />
                <h5>Margaret E.</h5>
                <p class="font-weight-light mb-0">
                  "This is fantastic! Thanks so much guys!"
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  class="img-fluid rounded-circle mb-3"
                  src={testimonial2}
                  alt="..."
                />
                <h5>Fred S.</h5>
                <p class="font-weight-light mb-0">
                  "Bootstrap is amazing. I've been using it to create lots of
                  super nice landing pages."
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  class="img-fluid rounded-circle mb-3"
                  src={testimonial3}
                  alt="..."
                />
                <h5>Sarah W.</h5>
                <p class="font-weight-light mb-0">
                  "Thanks so much for making these free resources available to
                  us!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section class="call-to-action text-white text-center" id="signup">
        <div class="container position-relative">
          <div class="row justify-content-center">
            <div class="col-xl-6">
              <h2 class="mb-4">Ready to get started? Sign up now!</h2>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </>
  );
}
