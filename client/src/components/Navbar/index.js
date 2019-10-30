import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger text-secondary p-0">
      <a className="navbar-item text-light nav-link" href="/">
        <h3>Google Books</h3>
      </a>
      <a className="navbar-item text-light nav-link" href="/search">
        Search
      </a>
      <a className="navbar-item text-light nav-link" href="/saved">
        Save
      </a>
    </nav>
  );
}

export default Nav;
