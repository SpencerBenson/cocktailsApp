import React from 'react'


function NavBar(Props){
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
<a className="navbar-brand" href="#">Cocktails App</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarColor03">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <a className="nav-link" href="#">Home
        <span className="sr-only">(current)</span>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Add Cocktail</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Advanced Filter</a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Sweet</a>
        <a className="dropdown-item" href="#">Romantic</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </li>
  </ul>
  <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>
</nav>
  )
}

export default NavBar
  
  






