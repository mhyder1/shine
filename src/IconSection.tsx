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
                This theme will look great on any device, no matter the size!
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
                Featuring the latest build of the new Bootstrap 5 framework!
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
                Ready to use with your own content, or customize the source
                files!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconSection;
