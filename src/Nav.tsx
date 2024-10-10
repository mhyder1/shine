import logo from "./assets/sun_logo_2.png";
import { Link } from "wouter";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light static-top p-0">
      <div class="container px-5">
        <Link class="navbar-brand" href="/">
          <img src={logo} style={{ width: "3rem" }} alt="S.H.I.N.E logo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item active">
              <Link class="nav-link" href="/about">
                About <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/events">
                Events
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/join">
                Join
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/contact">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/donate">
                <button class="btn btn-primary btn-sm">Donate</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
