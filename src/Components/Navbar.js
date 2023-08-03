import React from "react";
import PropTypes from "prop-types";
function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.bg} bg-${props.bg}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link " href="/">
                  {props.about}
                </a>
              </li>
            </ul>
            <div class={`form-check form-switch text-${props.bg==='light' ? 'dark' : 'light'}`} >
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.mode}/>
            <label class={`form-check-label `}  htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set the title",
  about: "About",
};

export default Navbar;
