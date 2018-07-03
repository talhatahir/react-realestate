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
                link: '/home'
              },
              {
                id:2,
                title: 'Search',
                link: '/search'
              },
              {
                id:3,
                title: 'Blog',
                link: '/blog'
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
