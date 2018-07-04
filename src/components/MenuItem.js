import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MenuItem extends Component {
  render() {

    let menuItems;
    if (this.props.menuItems){
        menuItems = this.props.menuItems.map(menuItem =>{
            return ( 
                    <li  key={menuItem.id}><Link to={menuItem.link} >{menuItem.title}</Link></li>
                );
       });

    }
    
    return (
        <ul className="nav navbar-nav">
            {menuItems}       
        </ul>
      
    
    );
  }
}

export default MenuItem;
