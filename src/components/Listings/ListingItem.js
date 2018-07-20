import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Listings.css';

class ListingItem extends Component {

    render() {
    return (
        <div className="brdr bgc-fff pad-10 box-shad mrg-20 property-listing" id={this.props.item.listing_id}>
            <div className="media">
                <Link className="pull-left" to={`/listings/${this.props.item.listing_id}`}>
                <img alt="" className="img-responsive"
                 src={this.props.item.image_url} /></Link>

                <div className="clearfix visible-sm"></div>
                <div className="media-body fnt-lighter">
                    <h4 className="media-heading">
                      <Link to={`/listings/${this.props.item.listing_id}`}>Rs {this.props.item.price}</Link>
                    </h4>
                    <ul className="list-inline mrg-0 btm-mrg-10">
                        <li>4,820 SqFt</li>
                        <li >|</li>
                        <li>5 Beds</li>
                        <li >|</li>
                        <li>5 Baths</li>
                    </ul>
                    <Link to={`/listings/${this.props.item.listing_id}`}><p className="hidden-xs">{this.props.item.title}</p><span className="fnt-smaller fnt-lighter fnt-arial">{this.props.item.description}</span></Link>
                </div>
            </div>
        </div>



       
    );

   
  }
}

export default ListingItem;
