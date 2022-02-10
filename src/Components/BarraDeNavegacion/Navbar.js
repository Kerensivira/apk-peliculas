/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          {/* el logo */}

          <Link class="navbar-brand" to="/">
            <img
              src="https://res.cloudinary.com/alexa01020304/image/upload/v1644454466/logo-blockBuster_aqx7hs.png"
              alt="Logo"
              width="106"
              height="64"
            />
          </Link>

          {/* Enlaces */}

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                
              <a class="nav-link active" aria-current="page" href="../BarraDeNavegacion/pages/Todas.js">
               Todas
              </a>

              <a class="nav-link" href="../BarraDeNavegacion/pages/MásValoradas.js">
                Más valoradas
              </a>

              <a class="nav-link" href="../BarraDeNavegacion/pages/MenosValoradas.js">
                Menos valoradas
                </a>
            </div>
          </div>
        </div>
        <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
      </nav>
    </div>
  );
};

export default Navbar;
