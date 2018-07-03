import React, { Component } from 'react';


class MenuItem extends Component {
  render() {

    let menuItems;
    if (this.props.menuItems){
        menuItems = this.props.menuItems.map(menuItem =>{

            return ( 
            <a key={menuItem.id} href={menuItem.link}>{menuItem.title}</a>
        );

        });

    }
    return (
        <div className="topnav">
        {menuItems}
        {/* <a href="#home" className="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>        */}
        </div>
      
    
    );
  }
}

export default MenuItem;
