import React, { Component } from 'react';
import axios from 'axios';
import ListingItem from './ListingItem';
import { Link } from 'react-router-dom';


class Listings extends Component {

  constructor(){
    super();
    this.state={
      listings:[]
    }
  }

  getListings(){
    //Treating users data as some kind of a lisitng data
    axios.get("https://jsonplaceholder.typicode.com/users").then(response =>{
      this.setState({listings:response.data}, () => {
        console.log(this.state);
      });
    });

  }

  componentWillMount(){
    this.getListings();
  }


  render() {

    const listingsItems = this.state.listings.map(listing=>{
      return(
        <ListingItem key={listing.id} item={listing}  />
      )

    });
   

    return (
      <div>
          <h1>Listings</h1>
            <div className="col-xs-12 col-sm-offset-2 col-sm-8">
            <ul className="event-list">
                {listingsItems}
            </ul>
			      </div>
          
          <br/>
          <Link to='/'>Back</Link>
      </div>
    
    );
  }
}

export default Listings;
