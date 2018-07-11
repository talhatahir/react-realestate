import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class ListingItem extends Component {
  
    render() {
    return (
        <div className="brdr bgc-fff pad-10 box-shad btm-mrg-20 property-listing">
            <div className="media">
                <Link className="pull-left" to={`/listings/${this.props.item.id}`}>
                <img alt="" className="img-responsive"
                 src="http://images.prd.mris.com/image/V2/1/Yu59d899Ocpyr_RnF0-8qNJX1oYibjwp9TiLy-bZvU9vRJ2iC1zSQgFwW-fTCs6tVkKrj99s7FFm5Ygwl88xIA.jpg" /></Link>

                <div className="clearfix visible-sm"></div>

                <div className="media-body fnt-lighter">
                    

                    <h4 className="media-heading">
                      <Link to={`/listings/${this.props.item.id}`}>$1,975,000 </Link></h4>


                    <ul className="list-inline mrg-0 btm-mrg-10">
                        <li>4,820 SqFt</li>
                        <li >|</li>
                        <li>5 Beds</li>
                        <li >|</li>
                        <li>5 Baths</li>
                    </ul>

                    <Link to={`/listings/${this.props.item.id}`}><p className="hidden-xs">{this.props.item.name}</p><span className="fnt-smaller fnt-lighter fnt-arial">Courtesy of HS Fox & Roach-Chestnut Hill
                    Evergreen</span></Link>
                </div>
            </div>
        </div>



       
    );

   
  }
}

export default ListingItem;
