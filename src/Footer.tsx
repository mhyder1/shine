import { Link } from "wouter";

const Footer = () => {
  return (
    <footer class="footer bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
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
            </p>
          </div>
          <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
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
