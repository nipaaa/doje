import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className='px-3 mb-5'>
   <nav class="navbar navbar-expand-lg border-bottom border-dark py-4 ">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand fw-bolder" href="#">Doje</a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active" >Home</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Expart</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">user</a>
              </li>
             
            </ul>
            <form >
              <Link to="logIn" class="btn btn-outline-success" type="submit">Log In</Link>
            </form>
          </div>
     
        </div>
   
      </nav>

      </div>
     
    );
};

export default Header;