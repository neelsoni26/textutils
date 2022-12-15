import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg`}
        style={{
          backgroundColor: props.mode === "light" ? "#F8F9FA" : "#161B22",
        }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="/"
            style={{
              color: props.mode === "light" ? "#000000E6" : "#C9D1D9",
            }}
          >
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{
                    color: props.mode === "light" ? "#000000e6" : "#C9D1D9",
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  style={{
                    color: props.mode === "light" ? "#000000E6" : "#C9D1D9",
                  }}
                >
                  {props.about}
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div
                className={`form-check form-switch`}
                style={{
                  color: props.mode === "light" ? "#000000E6" : "#C9D1D9",
                }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label
                  className={`form-check-label`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  {props.mode === "light" ? "Enable" : "Disable"} Dark Mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Default Title",
  about: "About",
  mode: "light",
};
