/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'

const Navbar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">

  {/* el logo */}

  <a class="navbar-brand" href="#">
      <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"/>
    </a>

{/* Enlaces */}

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
  
    </div>
  )
}

export default Navbar