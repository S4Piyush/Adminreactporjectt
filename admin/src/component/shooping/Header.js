import React from 'react'

export default function Header() {


  return (

  
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
  <div className="container d-flex justify-content-between align-items-center">
    <a className="navbar-brand text-success logo h1 align-self-center" href="index.html">
      Zay
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wifi-2" viewBox="0 0 16 16">
  <path d="M13.229 8.271c.216-.216.194-.578-.063-.745A9.456 9.456 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.577 1.336c.205.132.48.108.652-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.408.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.611-.091l.015-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .708 0l.707-.707z"/>
</svg>
    </a>
    
    
    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
      <div className="flex-fill">
        <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
          <li className="nav-item">
            <a className="nav-link" href="/Shoping">Home</a>
               
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/shop">Shop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar align-self-center d-flex">
        <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
          <div className="input-group">
            <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
            <div className="input-group-text">
              <i className="fa fa-fw fa-search" />
            </div>
          </div>
        </div>
        <a className="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
          <i className="fa fa-fw fa-search text-dark mr-2" />
        </a>
        <a className="nav-icon position-relative text-decoration-none" href="#">
          <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" />
          <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
        </a>
        <a className="nav-icon position-relative text-decoration-none" href="#">
          <i className="fa fa-fw fa-user text-dark mr-3" />
          <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
        </a>
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}
