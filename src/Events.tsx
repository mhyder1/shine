import flyer from "./assets/flyer.jpg";
import art from "./assets/women_events/art.jpg";
import banquet from "./assets/women_events/banquet.jpg";
import banner from "./assets/women_events/banner.jpg";
import event from "./assets/women_events/event.jpg";
import event2 from "./assets/women_events/event_2.jpg";
import festival from "./assets/women_events/festival.jpg";
import painting from "./assets/women_events/painting.jpg";
import playing from "./assets/children_events/playing.jpg";
import sidewalk from "./assets/children_events/sidewalk.jpg";
import sisters from "./assets/children_events/sisters.jpg";
import boys from "./assets/children_events/teen_boys.jpg";
import girls from "./assets/children_events/teen_girls.jpg";
import volunteer from "./assets/children_events/volunteer.jpg";
import women from "./assets/children_events/women.jpg";
import flyer_2 from "./assets/children_events/flyer.png";
const Events = () => {
  return (
    <div class="container mt-4">
      <h2>EVENTS</h2>
      <p>
        {/* <i class="fa-solid fa-star-and-cre
        scent mr-2"></i> */}
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
          <div class="d-flex flex-wrap gap-5">
            <img class="event" src={art} alt="art event" />
            <img class="event" src={banner} alt="nc muslim festival event" />
            <img class="event" src={banquet} alt="banquet event" />
            <img class="event" src={event2} alt="event" />
            <img class="event" src={event} alt="event 2" />
            <img class="event" src={festival} alt="festival event" />
            <img class="event" src={painting} alt="painting event" />
          </div>
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
          <p>
            Young people are an important asset to the future of our society.
            Therefore, our children-teen educational programs and events help to
            promote their development in becoming leaders and decision-makers.
          </p>
          <p>
            One of our new initiatives for the youth is the Triad Muslim Youth
            Council. This volunteer organization is for middle and high school
            students within the Piedmont-Triad and offers personal and
            professional development through various experiences.
          </p>
          <p>
            For more information on getting your child(ren) involved, register
            to attend one of our upcoming interest meetings.{" "}
          </p>
          Special programs we host for the youth are the following:
          <ul>
            <li>Conferences</li>
            <li>Workshops</li>
            <li>Summer Camps</li>
            <li>Social Events</li>
            <li>Field Trips</li>
          </ul>
          <h5>Upcoming events</h5>
          <img
            src={flyer_2}
            class="img-fluid mb-4 mt-3"
            alt="flyer of upcoming event"
            style={{ width: "40%", height: "40%" }}
          />
          <div class="d-flex flex-wrap gap-5">
            <img class="event" src={playing} alt="children playing" />
            <img class="event" src={sidewalk} alt="sidewalk art" />
            <img class="event" src={sisters} alt="muslim sisters" />
            <img class="event" src={boys} alt="teen boys" />
            <img class="event" src={girls} alt="teen girls" />
            <img class="event" src={volunteer} alt="young volunteers" />
            <img class="event" src={women} alt="young women" />
          </div>
        </section>
      </p>
    </div>
  );
};

export default Events;
