import { Link } from "wouter";
import donate from "./assets/donate.png";
const Donate = () => {
  return (
    <div class="container mt-4">
      <div class="row">
        <div class="col-sm">
          <p>
            Your donation to SHINE is an investment to build bridges of mutual
            understanding and humanity in this diverse community we live in.
          </p>
          <p>
            Join us in our mission to empower, uplift, and unite communities for
            the common good — let's work together to make our community an
            example of humanity, partnership, and productivity. There are many
            ways to make a gift in support of SHINE's work. From giving a
            monetary or in-kind gift to volunteering your time — it all makes a
            difference.
          </p>
          <section class="mb-4 d-flex flex-column align-items-center">
            <h2 class="donate-title">Give online</h2>
            <a href="https://form.jotform.com/242815915658164" target="_blank">
              <button class="btn btn-primary btn-sm">Donate</button>
            </a>
          </section>
          <hr />
          <section class="mb-4 d-flex flex-column align-items-center">
            <h2 class="donate-title">Give by mail</h2>
            <p style={{ width: "100%" }}>
              Mail a check or money order to: <br />
              Self-Help Information Network and Exchange PO Box 112 | Sedalia,
              NC 27432
            </p>
          </section>
          <hr />
          <section class="mb-4 d-flex flex-column align-items-center">
            <h2 class="donate-title">In-kind gifts</h2>
            <p>
              You can also support SHINE with in-kind (non-cash) gifts.
              Throughout the year, we need in-kind donations of food, gift
              cards, and/or gift certificates to keep our volunteer program
              facilitators well-fed and focused during long training and to
              compensate as a prize for events or in-office contests we may
              conduct. Can you help provide food for training? Or are you
              interested in donating a different type of in-kind gift? Contact
              us and let's talk!
            </p>
            shine.events72@gmail.com
          </section>
          <hr />
          <section class="mb-4 d-flex flex-column align-items-center">
            <h2 class="donate-title">Volunteer</h2>
            <p>
              Your time is a gift. Volunteering is a great way to connect with
              us and learn more about our work in the community. SHINE has
              volunteer opportunities throughout the year.
            </p>
            <a href="https://form.jotform.com/242816291001144" target="_blank">
              <button class="btn btn-primary btn-sm">Volunteer</button>
            </a>
          </section>
          <hr />
          <section class="mb-4 d-flex flex-column align-items-center">
            <h2 class="donate-title">
              Sponsor the Community Service Recognition Awards Luncheon
            </h2>
            <p>
              Show your support for SHINE by buying a ticket or becoming a
              sponsor at our Community Recognition Award Luncheon. It's SHINE's
              biggest community program, and one of the Triad's largest events
              celebrating diversity, equity, and humanity. All profits are an
              investment in SHINE's work.
            </p>
          </section>
        </div>
        <div class="col-sm">
          <img src={donate} alt="hands with heart" />
        </div>
      </div>
    </div>
  );
};
export default Donate;
