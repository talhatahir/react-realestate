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
    <h1>Listing Item Detail </h1>
    <br />
    <Link to='/listings'>Back</Link>
    <br/>
    <div className="brdr bgc-fff pad-10 box-shad btm-mrg-20 property-listing">
            <div className="media">                
                <img alt="" className="img-responsive"
                 src="http://images.prd.mris.com/image/V2/1/Yu59d899Ocpyr_RnF0-8qNJX1oYibjwp9TiLy-bZvU9vRJ2iC1zSQgFwW-fTCs6tVkKrj99s7FFm5Ygwl88xIA.jpg" />

                <div className="clearfix visible-sm"></div>

                <div className="media-body fnt-smaller">
                    <h4 className="media-heading">{this.state.listingsDetails.email}</h4>
                    <ul className="list-inline mrg-0 btm-mrg-10">
                        <li>{this.state.listingsDetails.website}</li>
                        <li >|</li>
                        <li>5 Beds</li>
                        <li >|</li>
                        <li>5 Baths</li>
                    </ul>
                  <p className="hidden-xs">{this.state.listingsDetails.name}</p><span className="fnt-smaller fnt-lighter fnt-arial">{this.state.listingsDetails.phone}</span>
                </div>
            </div>
        </div>    
    </div>
    );
  }
}

export default ListingItemDetails;
