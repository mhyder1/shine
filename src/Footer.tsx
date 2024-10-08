import { Link } from "wouter";

const Footer = () => {
  return (
    <footer class="footer bg-light" style={{ marginTop: "auto" }}>
      <div class="container">
        <div class="row">
          <div class="col-lg-10 h-100 text-center text-lg-start my-auto">
            <ul class="list-inline mb-2">
              <li class="list-inline-item">
                <Link href="/about">About</Link>
              </li>
              <li class="list-inline-item">⋅</li>
              <li class="list-inline-item">
                <Link href="/contact">Contact</Link>
              </li>
              <li class="list-inline-item">⋅</li>
              <li class="list-inline-item">
                <a href="#!">Terms of Use</a>
              </li>
              <li class="list-inline-item">⋅</li>
              <li class="list-inline-item">
                <a href="#!">Privacy Policy</a>
              </li>
            </ul>
            <p class="text-muted small mb-4 mb-lg-0">
              <span>&copy;</span> SHINE{" "}
              <span>{new Date().getFullYear()}. All Rights Reserved.</span>
              <span style={{ marginLeft: ".5rem", marginRight: ".5rem" }}>
                |
              </span>
              <span>P.O. Box 112, Sedalia, NC 27342</span>
              <span style={{ marginLeft: ".5rem", marginRight: ".5rem" }}>
                |
              </span>
              <span>SHINE is a registered 501(c)3 nonprofit.</span>
              <br />
              <strong>EIN: 87-1024593</strong>
            </p>
          </div>
          <div class="col-lg-2 h-100 text-center text-lg-end my-auto">
            <ul class="list-inline mb-0">
              <li class="list-inline-item me-4">
                <a href="#!">
                  <i class="bi-facebook fs-3"></i>
                </a>
              </li>
              <li class="list-inline-item me-4">
                <a href="#!">
                  <i class="bi-twitter fs-3"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!">
                  <i class="bi-instagram fs-3"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
