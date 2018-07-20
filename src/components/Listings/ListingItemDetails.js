import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class ListingItemDetails extends Component {   
  
    render() {     
    
    let listingId = this.props.match.params.id;
    let targetId = this.props.listings.filter(function (listing) {  
      return parseInt(listing.listing_id) === parseInt(listingId);
    }); 
    targetId=targetId[0];
    
    return (      
    <div className="col-sm-7">   
    <h1>Listing Item Detail </h1>
    
    <button type="button" className="btn flt-right"><Link  to='/listings'>Back</Link></button>
    <br />
    <br/>
    <div className="brdr bgc-fff pad-10 box-shad btm-mrg-20 property-listing">
            <div className="media">                
                <img width="200"  alt="" className="img-responsive"
                 src={targetId.image_url} />

                <div className="clearfix visible-sm"></div>

                <div className="media-body fnt-lighter">
                    <h4 className="media-heading">{targetId.user_email}</h4>
                    <ul className="list-inline mrg-0 btm-mrg-10">
                        <li>4820 SqFt</li>
                        <li >|</li>
                        <li>5 Beds</li>
                        <li >|</li>
                        <li>5 Baths</li>
                    </ul>
                  <p className="hidden-xs">{targetId.user_firstname} {targetId.user_lastname}</p><span className="fnt-smaller fnt-lighter fnt-arial">{targetId.user_cell}</span>
                </div>
            </div>
        </div>    
    </div>
    );
  }
}

const mapStateToProps= (state)=>{
  return{
    listings:state.listings
    } 
};


export default connect(mapStateToProps,null)(ListingItemDetails);


