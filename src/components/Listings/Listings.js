import React, { Component } from 'react';
import axios from 'axios';
import ListingItem from './ListingItem';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class Listings extends Component {

  componentWillMount(){
    this.props.getListings();    
  }

  
  shouldComponentUpdate() {
    console.log(this.props.hasFetched);
    if (this.props.hasFetched) {
      return false;
    }
    return true;
  }

  render() {
    const listingsItems = this.props.listings.map(listing=>{
      return(
        <ListingItem key={listing.listing_id} item={listing}  />
      )
  });
   

    return (
      <div className="listings">
          <h1>Listings</h1>
            <div className="row">
                <div className="col-sm-7">   
                <button type="button" className="btn flt-right"><Link  to='/'>Back</Link></button>
                <br/>          
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
  axios.get("http://localhost:8000/backend/api/").then(response =>{
    console.log(response.data);
    return dispatch({type:actionTypes.RESOLVED_GET_LISTINGS, data: response.data, fetchFlag:true});   
  }).catch(err=> console.log(err));

}


const mapDispatchToProps = (dispatch) => {
  return {     
      getListings : () => getListings(dispatch)    
  };
}

const mapStateToProps= (state)=>{
  return{
    listings:state.listings,
    hasFetched: state.hasFetched 
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(Listings);