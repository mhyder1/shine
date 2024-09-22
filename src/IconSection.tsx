const IconSection = () => {
  return (
    <section class="features-icons bg-light text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                <i
                  class="fa-solid fa-school m-auto"
                  style={{ color: "#fcbf44" }}
                ></i>
              </div>
              <h3>Education</h3>
              <p class="lead mb-0">
                Illuminating the journey to unlocking your full potential.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                <i
                  class="fa-solid fa-people-group m-auto"
                  style={{ color: "rgb(117 198 96)" }}
                ></i>
              </div>
              <h3>Community</h3>
              <p class="lead mb-0">
                Together, we can uplift each other, celebrate our differences,
                and create spaces where everyone shines.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                <i
                  class="fa-solid fa-graduation-cap m-auto"
                  style={{ color: "#fcbf44" }}
                ></i>
              </div>
              <h3>Scholarships</h3>
              <p class="lead mb-0">
                With the support of scholarships, bright minds can shine even
                brighter and make their mark on the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconSection;
