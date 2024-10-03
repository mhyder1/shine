import flyer from "./assets/flyer.jpg";
const Events = () => {
  return (
    <div class="container mt-4">
      <h2>EVENTS</h2>
      <p>
        {/* <i class="fa-solid fa-star-and-crescent mr-2"></i> */}
        <a href="https://www.ncmuslimfestival.com/" target="_blank">
          NC Muslim Festival
        </a>
        <hr class="m-5" />
        <section>
          <h3>
            {/* <i class="fa-solid fa-person-dress"></i>  */}
            For Women
          </h3>
          <blockquote class="blockquote text-center">
            <p>
              "If you educate a man, you educate an individual. But if you
              educate a woman, you educate a nation".
            </p>
            <footer class="blockquote-footer">African proverb</footer>
          </blockquote>
          <p>
            SHINE's educational programs and events for women are designed to
            empower women and young girls to become the best version of
            themselves while establishing healthy and meaningful means of
            sisterhood throughout the journey.
          </p>
          <p>
            (Sisters Group name) was established to (mission). We encourage
            women within the Piedmont-Triad who wish to become a member of this
            amazing group to join.
          </p>
          Special events we provide for women:
          <ul>
            <li>Conferences</li>
            <li>Workshops</li>
            <li>Social gatherings</li>
            <li>Luncheons</li>
            <li>Retreats</li>
          </ul>
          <h5>Upcoming events</h5>
          <img
            src={flyer}
            class="img-fluid mb-4 mt-3"
            alt="flyer of upcoming event"
            style={{ width: "50%", height: "50%" }}
          />
          <h5>Past events</h5>
        </section>
        <hr class="m-5" />
        <section>
          {/* <i class="fa-solid fa-person"></i>  */}
          <h3>For Men</h3>
        </section>
        <hr class="m-5" />
        <section>
          {/* <i class="fa-solid fa-children"></i>  */}
          <h3>For Children</h3>
        </section>
      </p>
    </div>
  );
};

export default Events;
