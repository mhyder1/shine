import children_logo from "../assets/children_logo.png";
const Children = () => {
  return (
    <div class="container mt-4">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ width: "20%" }}
          src={children_logo}
          alt="Logo for women's section"
          class="mb-4"
        />
      </div>
      <section>
        <p>
          Young people are an important asset to the future of our society.
          Therefore, our children-teen educational programs and events help to
          promote their development in becoming leaders and decision-makers.
        </p>
        <p>
          One of our new initiatives for the youth is the{" "}
          <strong style={{ color: "rgb(117 198 96)" }}>
            Triad Muslim Youth Council
          </strong>
          . This volunteer organization is for middle and high school students
          within the Piedmont-Triad and offers personal and professional
          development through various experiences.
        </p>
        <p>
          For more information on getting your child(ren) involved, register to
          attend one of our upcoming interest meetings.{" "}
        </p>
        Special programs we host for the youth are the following:
        <ul>
          <li>Conferences</li>
          <li>Workshops</li>
          <li>Summer Camps</li>
          <li>Social Events</li>
          <li>Field Trips</li>
        </ul>
      </section>
      <div class="mt-4">
        Interested in becoming a member of the{" "}
        <strong style={{ color: "rgb(117 198 96)" }}>
          Triad Muslim Youth Council
        </strong>
        ?{" "}
        <a href="https://form.jotform.com/242707510698159" target="_blank">
          <button type="button" class="btn btn-success btn-sm">
            Join Here
          </button>
        </a>
      </div>
    </div>
  );
};

export default Children;
