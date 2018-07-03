import React, { Component } from 'react';
import MenuItem from './MenuItem';


class Menu extends Component {

  constructor(){
      super();
      this.state ={
        menuItems: [
              {
                id:1,
                title: 'Home',
                link: '/'
              },
              {
                id:2,
                title: 'Listings',
                link: '/listings'
              },
              {
                id:3,
                title: 'About',
                link: '/about'
              }
            ]         
          
      }
  }


  render() {

    return (
      
      <div>
        <MenuItem menuItems={this.state.menuItems}/>         
      </div>  
    
    );
  }
}

export default Menu;
