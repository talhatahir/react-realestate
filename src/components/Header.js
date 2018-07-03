import React, { Component } from 'react';
import Menu from './Menu';


class Header extends Component {
  render() {
    return (
      
      <header className="App-header">
        <Menu />
         <h1 className="App-title">Welcome to Tin Tin Real Estate Propery Portal</h1>
      </header>   
    
    );
  }
}

export default Header;
