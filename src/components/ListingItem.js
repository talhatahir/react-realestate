import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class ListingItem extends Component {
  
    render() {
    return (
        <li>        
        <img alt="Independence Day" src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg" />
        <div className="info">
            <h2 className="title"><Link to={`/listings/${this.props.item.id}`}>{this.props.item.name}</Link></h2>
            <p className="desc">{this.props.item.phone}</p>
            <p className="desc">{this.props.item.email}</p>
            <p className="desc">{this.props.item.website}</p>            
        </div>       
    </li>      
       
    );

   
  }
}

export default ListingItem;
