import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MenuItem extends Component {
  render() {

    let menuItems;
    if (this.props.menuItems){
        menuItems = this.props.menuItems.map(menuItem =>{
            return ( 
                    <Link to={menuItem.link}  key={menuItem.id}>{menuItem.title}</Link>
                );
       });

    }
    
    return (
        <div className="topnav">
            {menuItems}       
        </div>
      
    
    );
  }
}

export default MenuItem;
