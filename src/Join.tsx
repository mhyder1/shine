import students from "./assets/students.png";
const Join = () => {
  return (
    <div
      class="container mt-4"
      // style={{ background: `url(${students}) no-repeat`, height: "50vh" }}
    >
      {/* <img src={students} class="join" /> */}
      <h2>JOIN THE TEAM</h2>
      <div
        style={{
          backgroundImage: `url(${students})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          height: "55vh",
          padding: "1em",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255,255,255, .7)",
            padding: ".6em",
            borderRadius: ".2em",
            marginBottom: "1em",
          }}
        >
          <p>
            We are actively seeking reliable, resourceful team players with
            valuable skills, who are committed to supporting our efforts.
          </p>
          <p>
            If this is you, submit your application TODAY!{" "}
            <strong>Serious inquiries only!</strong>
          </p>
        </div>
        <a href="https://form.jotform.com/222665302873154" target="_blank">
          <button type="button" class="btn btn-success btn-sm">
            Apply!
          </button>
        </a>
      </div>
    </div>
  );
};

export default Join;
