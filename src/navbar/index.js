import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavbarComponent = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const active = paths[1];

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid px-0 py-2">
        <Link to="/home" className="navbar-brand nav-link fs-4 fw-bold">
          Expensive JPEGs
        </Link>

        {/* Hamburger menu */}
        <button
          className="navbar-toggler mb-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Search bar */}
        <form className="d-flex w-100" role="search">
          <div className="input-group">
            <input
              className="form-control form-control-lg mx-0 mx-lg-2 rounded-pill"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </form>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <Link to="/explore" className={`nav-link mx-2 ${active === "explore" ? "active" : ""}`}>
              Explore
            </Link>
            <Link to="/product" className={`nav-link mx-2 ${active === "product" ? "active" : ""}`}>
              Product
            </Link>
            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <Link to="#" className="dropdown-item">
                  Action
                </Link>
                <Link to="#" className="dropdown-item">
                  Another action
                </Link>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <Link to="#" className="dropdown-item">
                  Something else here
                </Link>
              </ul>
            </li>
            <Link to="/profile" className={`nav-link px-0 px-lg-2 mx-2 ${active === "profile" ? "active" : ""}`}>
              <i className="bx bx-user bx-sm align-middle"></i>
            </Link>
            <Link to="/cart" className={`nav-link px-0 px-lg-2 mx-2 ${active === "cart" ? "active" : ""}`}>
              <i className="bx bx-cart bx-sm align-middle"></i>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
