import React from 'react';
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Listings from './Listings/Listings';
import ListingItemDetails from './Listings/ListingItemDetails';


const Main = () =>(
    <div> 
        <BrowserRouter>   
        <div>       
        <Header />
        <div className="container container-pad" id="property-listings">
        <div className="row">    
            <Switch>
                <Route exact path='/' component={Home}  />
                <Route exact path='/listings' component={Listings}  />
                <Route exact path='/about' component={About} />
                <Route exact path='/listings/:id' component={ListingItemDetails} />
            </Switch>    
         </div>
         </div>
         </div>
        </BrowserRouter>        
      <br/>
      <br/>
      <Footer/>
      </div>
)

export default Main; 