import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavbarComponent = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const active = paths[1];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid px-0">
        <Link to="/home" className="navbar-brand nav-link fs-4">
          Expensive JPEGs
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <Link to="/shop" className={`nav-link mx-2 ${active === "shop" ? "active" : ""}`}>
              Shop
            </Link>
            <Link to="/product" className={`nav-link mx-2 ${active === "product" ? "active" : ""}`}>
              Product
            </Link>
            <li className="nav-item dropdown">
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
          </ul>

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
          <ul className="navbar-nav">
            <Link to="/login" className={`nav-link px-0 px-lg-2 mx-3 ${active === "profile" ? "active" : ""}`}>
              <i className="bx bx-user bx-sm align-middle"></i>
            </Link>
            <Link to="/cart" className={`nav-link px-0 px-lg-2 ${active === "cart" ? "active" : ""}`}>
              <i className="bx bx-cart bx-sm align-middle"></i>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
