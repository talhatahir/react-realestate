import React, { Component } from 'react';
import MenuItem from './MenuItem';
import {Link} from 'react-router-dom';


class Menu extends Component {

  constructor(){
      super();
      this.state ={
        menuItems: [              
              {
                id:1,
                title: 'Listings',
                link: '/listings'
              },
              {
                id:2,
                title: 'About',
                link: '/about'
              }
            ]         
          
      }
  }


  render() {

    return (      
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
            <Link className="navbar-brand" to='/'>Tin Tin Real Estate</Link>
            </div>
            <div>
                <MenuItem menuItems={this.state.menuItems}/>         
              </div>      
          </div>
        </nav>
              

    
    );
  }
}

export default Menu;
