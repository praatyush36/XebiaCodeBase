import {NavLink} from 'react-router-dom';
import React from 'react';
const Header = (props) => (
  <header>
  <div>
    <nav id="myNavbar" className="navbar navbar-inverse" role="navigation">   
      <div className="container" style={{display: "contents"}}>
          
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><NavLink id="home" className="nav-link"  to="/">Home</NavLink></li>
            <li><NavLink id="search"  style={{pointerEvents: "none"}}className="nav-link"  to="/search">Search</NavLink></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">          
            <li><NavLink className="dropdown-item" to="/logout">Logout</NavLink></li>
          </ul>
		    </div>
      </div>
    </nav>
</div>

  </header>
);


export default Header;


  