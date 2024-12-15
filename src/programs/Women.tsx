import women_logo from "../assets/women_logo.png";

const Women = () => {
  return (
    <div class="container mt-4">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ width: "50%" }}
          src={women_logo}
          alt="Logo for women's section"
        />
      </div>
      <section>
        <blockquote class="blockquote text-center mt-4 mb-4">
          <p>
            "If you educate a man, you educate an individual. But if you educate
            a woman, you educate a nation".
          </p>
          <footer class="blockquote-footer">African proverb</footer>
        </blockquote>
        <p>
          SHINE's educational programs and events for women are designed to
          empower women and young girls to become the best version of themselves
          while establishing healthy and meaningful means of sisterhood
          throughout the journey.
        </p>
        <p>
          <strong style={{ color: "rgb(117 198 96)" }}>
            Triad Muslim Women Alliance
          </strong>{" "}
          was founded to empower Muslim women through education, mentorship, and
          social engagement, fostering a strong sense of community and
          sisterhood while contributing to the greater good. We encourage women
          within the Piedmont-Triad who wish to become a member of this amazing
          group to join.
        </p>
        Special events we provide for women:
        <ul>
          <li>Conferences</li>
          <li>Workshops</li>
          <li>Social gatherings</li>
          <li>Luncheons</li>
          <li>Retreats</li>
        </ul>
      </section>
      <div class="mt-4">
        Interested in becoming a member of the{" "}
        <strong style={{ color: "rgb(117 198 96)" }}>
          Triad Muslim Women Alliance
        </strong>
        ?{" "}
        <a href="https://form.jotform.com/243415364864158" target="_blank">
          <button type="button" class="btn btn-success btn-sm">
            Join Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Women;
