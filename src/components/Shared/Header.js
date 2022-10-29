import React from 'react';
import { Link } from 'react-router-dom';
import search from "../../assets/icon/search.svg";
import account from "../../assets/icon/account.svg";


const Header = () => {
    return (
      <div className='px-3 mb-5'>
   <nav class="navbar navbar-expand-lg border-bottom border-dark py-4 ">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link to="/" class="navbar-brand fw-bolder fs-1" href="#">Doje</Link>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active fw-bolder" >Home</Link>
              </li>
              <li class="nav-item">
                <Link to="expert" class="nav-link active fw-bolder" href="#">Expert</Link>
              </li>
              <li  class="nav-item">
                <Link to="/" class="nav-link active fw-bolder" href="#">user</Link>
              </li>
              <li  class="nav-item">
                <Link to="/logIn" class="nav-link active fw-bolder" href="#">Log In</Link>
              </li>
           
            </ul>
            <form class="d-flex" role="search">
              <button className='border-0 bg-transparent'>  <img className='me-4' src={search} alt="" /></button>
              <button className='border-0 bg-transparent'>  <img src={account} alt="" /></button>
  
   
    </form>
          </div>
     
        </div>
   
      </nav>

      </div>
     
    );
};

export default Header;