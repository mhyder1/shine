import students from "./assets/muslim_students.jpg";
const Join = () => {
  return (
    <div class="container mt-4">
      {/* <img src={students} class="join" /> */}
      <h2>JOIN THE TEAM</h2>
      <p>
        We are actively seeking reliable, resourceful team players with valuable
        skills, who are committed to supporting our efforts.
      </p>
      <p>
        If this is you, submit your application TODAY! Serious inquiries only!
      </p>
      <a href="https://form.jotform.com/222665302873154" target="_blank">
        <button type="button" class="btn btn-success btn-sm">
          Apply!
        </button>
      </a>
    </div>
  );
};

export default Join;
