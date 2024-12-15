import men_logo from "../assets/men_logo.jpeg";
const Men = () => {
  return (
    <div class="container mt-4">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ width: "30%" }}
          src={men_logo}
          alt="Logo for women's section"
          class="mb-4"
        />
      </div>
      <p>Brother's group coming soon!</p>
      <p>
        If there are any Muslim brothers in the Piedmont-Triad area who would
        like to lead the brother's group, email shine.events72@gmail.com.
      </p>
    </div>
  );
};

export default Men;
