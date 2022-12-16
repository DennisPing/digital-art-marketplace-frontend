import { useState } from "react";
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
  const logoutHandler = async () => {
    await dispatch(logout());
    window.location.href = "/home";
  };

  // Navigate to the search result page
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const searchHandler = async () => {
    if (search !== "") {
      navigate("/explore-search", { state: { search } });
    }
  };

  const enterKeyHandler = (e) => {
    if (e.key === "Enter" && search !== "") {
      navigate("/explore-search", { state: { search } });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid px-0 py-2">
        <Link to="/home" className="navbar-brand nav-link fs-4 fw-bold">
          Expensive JPEGs
        </Link>

        {/* Hamburger menu */}
        <button
          className="navbar-toggler mb-3 me-2"
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
        <div className="d-flex input-group me-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search collections"
            aria-label="Search collections"
            aria-describedby="button-addon"
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={(e) => enterKeyHandler(e)}
          />
          <button className="btn btn-outline-primary" type="button" id="button-addon" onClick={searchHandler}>
            Search
          </button>
        </div>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <Link
              to="/explore"
              className={`nav-link nav-btn-hover fw-semibold rounded-3 mx-2 ${active === "explore" ? "active" : ""}`}
            >
              Explore
            </Link>
            {user ? (
              // If the user is logged in, show the profile button
              <li className="nav-item nav-btn-hover rounded-3 dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle fw-semibold text-primary"
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
                  <Link to="/profile/mycollection" className="dropdown-item">
                    My Collections
                  </Link>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <Link className="dropdown-item" onClick={logoutHandler}>
                    Log Out
                  </Link>
                </ul>
              </li>
            ) : (
              // Else, if the user is not logged in, show the login button
              <Link
                to="/login"
                className={`nav-link nav-btn-hover rounded-3 fw-semibold text-nowrap mx-2 ${
                  active === "login" ? "active" : ""
                }`}
              >
                Log In
              </Link>
            )}

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
