import React from 'react';
import RegisterLoginModal from "./RegisterLoginModal";
import LogoutButton from './LogoutButton';
export default  () => {
    return (

<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
  <button className="navbar-toggler navbar-toggler-center" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {/* <a className="navbar-brand" href="#">RMUSELIVE</a> */}

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      {/* <li className="nav-item active">
        <a className="nav-link" href="/">Home <span class="sr-only"></span></a>
      </li> */}
      {/* <li className="nav-item">
        <a className="nav-link" href="/RegisterLoginScreen">Login/Signup</a>
      </li> */}
      {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
      <li>
      <LogoutButton />
      <RegisterLoginModal  />
      </li>
    
    </ul>
    {/* <form class="form-inline my-2 my-lg-0"> */}
      {/* <input class="form-control mr-sm-2" type="text" placeholder="Search"> */}
      {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
    {/* </form> */}
 
  </div>
  
</nav>
    )
}

