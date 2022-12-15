import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/user-reducer";

import "./navbar.css";

const NavbarComponent = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const active = paths[1];

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await dispatch(logout());
    navigate("/home");
  };

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
            <Link
              to="/explore"
              className={`nav-link nav-btn-hover rounded-3 mx-2 ${active === "explore" ? "active" : ""}`}
            >
              Explore
            </Link>
            {user ? (
              // If the user is logged in, show the profile button
              <li className="nav-item nav-btn-hover rounded-3 dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle text-primary"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul className="dropdown-menu">
                  <Link to="/profile" className="dropdown-item">
                    My Profile
                  </Link>
                  <Link to="#" className="dropdown-item">
                    My Collections
                  </Link>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <Link to="#" className="dropdown-item" onClick={logoutHandler}>
                    Log Out
                  </Link>
                </ul>
              </li>
            ) : (
              // Else, if the user is not logged in, show the login button
              <Link
                to="/login"
                className={`nav-link nav-btn-hover rounded-3 text-nowrap mx-2 ${active === "login" ? "active" : ""}`}
              >
                Log In
              </Link>
            )}

            {/* <Link to="/profile" className={`nav-link px-0 px-lg-2 mx-2 ${active === "profile" ? "active" : ""}`}>
              <i className="bx bx-user bx-sm align-middle"></i>
            </Link> */}
            <Link
              to="/cart"
              className={`nav-link nav-btn-hover rounded-3 px-0 px-lg-2 mx-2 ${active === "cart" ? "active" : ""}`}
            >
              <i className="bx bx-cart bx-sm align-middle"></i>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
