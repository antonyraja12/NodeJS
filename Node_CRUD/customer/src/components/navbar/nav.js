import React from "react";
import { Link } from "react-router-dom";

export function Nav() {

  return (<>

    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">AR</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to='/' className="nav-link">Home</Link>
            </li>
            <li class="nav-item">
              <Link to='/' className="nav-link">About</Link>
            </li>
            <li class="nav-item">
              <Link to='/' className="nav-link">Contact</Link>
            </li>
            <li>
              <Link to='/admin' className="nav-link">Admin</Link>
            </li>
          </ul>
          <Link to='/' className="nav-link"><button className="btn btn-outline-primary"> let's Start</button></Link>
        </div>
      </div>
    </nav></>);
}