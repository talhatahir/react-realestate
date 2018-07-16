import React  from 'react';
import {Link} from 'react-router-dom';

const  Menu = () =>  (      
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to='/'>Tin Tin Real Estate</Link>
            </div>
            <div>
              <ul className="nav navbar-nav">
                <li><Link to='/listings'>Listings</Link></li>
                <li><Link to='/about'>About</Link></li>
              </ul>
            </div>      
          </div>
        </nav>
    
    );

export default Menu;
