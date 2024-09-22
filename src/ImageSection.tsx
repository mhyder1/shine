import community from "./assets/community.jpg";
import event from "./assets/event.jpg";
import grad from "./assets/grad.jpg";

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
              SHINE's educational events are designed to inspire and empower all
              by providing learning opportunities that will enhance knowledge
              and skills in specific subject areas. These programs include
              workshops, conferences, mentorship, and hands-on experiences,
              targeting various age groups and skill levels.
            </p>
          </div>
        </div>
        <div class="row g-0">
          <div
            class="col-lg-6 text-white showcase-img"
            style={{
              backgroundImage: `url(${community})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div class="col-lg-6 my-auto showcase-text">
            <h2>Community Engagement Events</h2>
            <p class="lead mb-0">
              SHINE's events are professionally designed to create
              collaboration, personal growth, and social impact. They unite
              individuals and organizations to address local challenges through
              workshops, volunteer initiatives, and networking opportunities.
            </p>
          </div>
        </div>
        <div class="row g-0">
          <div
            class="col-lg-6 order-lg-2 text-white showcase-img"
            style={{ backgroundImage: `url(${grad})` }}
          ></div>
          <div class="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Scholarships</h2>
            <p class="lead mb-0">
              SHINE's Scholarship Program offers financial support to
              outstanding high school seniors pursuing higher education, helping
              to ease the burden of tuition and other academic expenses. It
              empowers future leaders by recognizing academic excellence,
              leadership qualities, and community involvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
