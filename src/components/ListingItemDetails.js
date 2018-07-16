import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class ListingItemDetails extends Component {   
  
    render() {     
    
    let listingId = this.props.match.params.id;
    let targetId = this.props.listings.filter(function (listing) {  
      return listing.id == listingId;
    }); 
    targetId=targetId[0];
    
    return (      
    <div>
    <h1>Listing Item Detail </h1>
    <br />
    <Link to='/listings'>Back</Link>
    <br/>
    <div className="brdr bgc-fff pad-10 box-shad btm-mrg-20 property-listing">
            <div className="media">                
                <img alt="" className="img-responsive"
                 src="http://images.prd.mris.com/image/V2/1/Yu59d899Ocpyr_RnF0-8qNJX1oYibjwp9TiLy-bZvU9vRJ2iC1zSQgFwW-fTCs6tVkKrj99s7FFm5Ygwl88xIA.jpg" />

                <div className="clearfix visible-sm"></div>

                <div className="media-body fnt-lighter">
                    <h4 className="media-heading">{targetId.email}</h4>
                    <ul className="list-inline mrg-0 btm-mrg-10">
                        <li>{targetId.website}</li>
                        <li >|</li>
                        <li>5 Beds</li>
                        <li >|</li>
                        <li>5 Baths</li>
                    </ul>
                  <p className="hidden-xs">{targetId.name}</p><span className="fnt-smaller fnt-lighter fnt-arial">{targetId.phone}</span>
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


