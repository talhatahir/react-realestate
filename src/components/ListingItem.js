import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class ListingItem extends Component {
  
    render() {
    return (
        <li>
        <Link to={`/listings/${this.props.item.id}`}>{this.props.item.name}</Link>
        </li>
    );
  }
}

export default ListingItem;
