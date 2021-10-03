import React from 'react'

function Header(props) {

    //  console.log("headre" , props.data)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">
    MYSHOP
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
        <a className="nav-link " href="#"><i class="fas fa-2x fa-shopping-cart"></i><span>3</span></a>
      </li>
    </ul>
  
  </div>
</nav>

        </div>
    )
}

export default Header;
