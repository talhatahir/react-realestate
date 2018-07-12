import React, { Component } from 'react';
import axios from 'axios';
import ListingItem from './ListingItem';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions';


class Listings extends Component {

  componentWillMount(){
    this.props.getListings();
  }

  render() {
    const listingsItems = this.props.listings.map(listing=>{
      return(
        <ListingItem key={listing.id} item={listing}  />
      )
  });
   

    return (
      <div>
          <h1>Listings</h1>
          <Link to='/'>Back</Link>
            <div className="row">
                <div className="col-sm-8">             
                 {listingsItems}
                </div>
			      </div>          
          <br/>          
      </div>
    
    );
  }

}

const getListings=(dispatch) =>{
  //Treating users data as some kind of a lisitng data
  axios.get("https://jsonplaceholder.typicode.com/users").then(response =>{
    return dispatch({type:actionTypes.RESOLVED_GET_LISTINGS, data: response.data});   
  }).catch(err=> console.log(err));

}


const mapDispatchToProps = (dispatch) => {
  return {     
      getListings : () => getListings(dispatch)    
  };
}

const mapStateToProps= (state)=>{
  console.log('mapStateToProps',state);
  return{
    listings:state.listings
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(Listings);