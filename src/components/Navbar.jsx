import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <NavLink className="navbar-item" to="/">Rick & Morty</NavLink>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarRickAndMorty">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarRickAndMorty" className="navbar-menu">
    <div className="navbar-start">
      <NavLink className="navbar-item" to='/'>List</NavLink>


      
    </div>

    
  </div>
</nav>
    )
};

export default Navbar;
