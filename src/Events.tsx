// import flyer from "./assets/flyer.jpg";
import art from "./assets/women_events/art.jpg";
import banquet from "./assets/women_events/banquet.jpg";
import banner from "./assets/women_events/banner.jpg";
import event from "./assets/women_events/event.jpg";
import event2 from "./assets/women_events/event_2.jpg";
import festival from "./assets/women_events/festival.jpg";
import painting from "./assets/women_events/painting.jpg";
import meetup from "./assets/women_events/meetup.jpg";
import playing from "./assets/children_events/playing.jpg";
import sidewalk from "./assets/children_events/sidewalk.jpg";
import sisters from "./assets/children_events/sisters.jpg";
import boys from "./assets/children_events/teen_boys.jpg";
import girls from "./assets/children_events/teen_girls.jpg";
import volunteer from "./assets/children_events/volunteer.jpg";
import women from "./assets/children_events/women.jpg";
// import flyer_2 from "./assets/children_events/flyer.png";
import logo from "./assets/ncmf_logo.png";
const Events = () => {
  return (
    <div class="container mt-4">
      <h2>EVENTS</h2>
      <hr class="m-5" />
      <a
        href="https://www.ncmuslimfestival.com"
        target="blank"
        style={{ color: "rgb(117 198 96)" }}
      >
        <h2 style={{ color: "rgb(117 198 96)" }}>NC Muslim Festival</h2>
      </a>
      <address>
        SAVE THE DATE
        <br />
        Center City Park - Downtown Greensboro
        <br />
        Saturday, May 10, 2025
        <br />
        10:00 AM - 6:00 PM
      </address>

      <a href="https://www.ncmuslimfestival.com/" target="_blank">
        <img
          style={{ width: "10%" }}
          src={logo}
          alt="NC Muslim Festival Logo"
        />
      </a>
      <hr class="m-5" />
      <section>
        <h3 style={{ color: "rgb(117 198 96)" }}>For Women</h3>

        <h5>Upcoming events</h5>
        <p>Coming soon.</p>
        <h5>Past events</h5>
        <div class="d-flex flex-wrap gap-5">
          <img class="event" src={art} alt="art event" />
          <img class="event" src={banner} alt="nc muslim festival event" />
          <img class="event" src={banquet} alt="banquet event" />
          <img class="event" src={event2} alt="event" />
          <img class="event" src={event} alt="event 2" />
          <img class="event" src={festival} alt="festival event" />
          <img class="event" src={painting} alt="painting event" />
          <img class="event" src={meetup} alt="meetup event" />
        </div>
      </section>
      <hr class="m-5" />
      <section>
        <h3 style={{ color: "rgb(117 198 96)" }}>For Men</h3>
        <h5>Upcoming events</h5>
        <p>Coming soon.</p>
      </section>
      <hr class="m-5" />
      <section>
        <h3 style={{ color: "rgb(117 198 96)" }}>For Children</h3>
        <h5>Upcoming events</h5>
        <p>
          The next TMYC meeting will be:
          <br /> Saturday, January 18, 2025 from 9:30 am - 11:00 am
          <br />
          Vance Chavis Library.
          <br />
          All meetings start on time.
        </p>
        {/* <img
          src={flyer_2}
          class="img-fluid mb-4 mt-3"
          alt="flyer of upcoming event"
          style={{ width: "40%", height: "40%" }}
        /> */}
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
    </div>
  );
};

export default Events;
