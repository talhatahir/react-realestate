import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class ListingItemDetails extends Component { 
    
    
    constructor(){
        super();
        this.state={
          listingsDetails:[]
        }
      }
    
      getListingDetails(){
          let listingId = this.props.match.params.id;
        //Treating users detail data as some kind of a lisitng data
        axios.get(`https://jsonplaceholder.typicode.com/users/${listingId}`)
        .then(response =>{
          this.setState({listingsDetails:response.data});
        }
        ).catch(err=> console.log(err));
    
      }
      
      componentWillMount(){
        this.getListingDetails();
      }
    
  
    render() {
        

    return (      
    <div>
    <h1>Listing Item Details </h1>
    <br />
    <Link to='/listings'>Back</Link>
    <br/>
    <ul>
        <li>Name : {this.state.listingsDetails.name}</li>
    </ul>
    </div>
    );
  }
}

export default ListingItemDetails;
