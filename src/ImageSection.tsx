import flower from "./assets/flower.jpeg";
import event from "./assets/event.jpg";
import showcase3 from "./assets/bg-showcase-3.jpg";

const ImageSection = () => {
  return (
    <section class="showcase">
      <div class="container-fluid p-0">
        <div class="row g-0">
          <div
            class="col-lg-6 order-lg-2 text-white showcase-img"
            style={{ backgroundImage: `url(${event})` }}
          ></div>
          <div class="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Educational Programs</h2>
            <p class="lead mb-0">
              When you use a theme created by Start Bootstrap, you know that the
              theme will look great on any device, whether it's a phone, tablet,
              or desktop the page will behave responsively!
            </p>
          </div>
        </div>
        <div class="row g-0">
          <div
            class="col-lg-6 text-white showcase-img"
            style={{
              backgroundImage: `url(${flower})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div class="col-lg-6 my-auto showcase-text">
            <h2>Community Engagement Events</h2>
            <p class="lead mb-0">
              Newly improved, and full of great utility classes, Bootstrap 5 is
              leading the way in mobile responsive web development! All of the
              themes on Start Bootstrap are now using Bootstrap 5!
            </p>
          </div>
        </div>
        <div class="row g-0">
          <div
            class="col-lg-6 order-lg-2 text-white showcase-img"
            style={{ backgroundImage: `url(${showcase3})` }}
          ></div>
          <div class="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Scholarships</h2>
            <p class="lead mb-0">
              Landing Page is just HTML and CSS with a splash of SCSS for users
              who demand some deeper customization options. Out of the box, just
              add your content and images, and your new landing page will be
              ready to go!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
