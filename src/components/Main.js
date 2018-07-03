import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Listings from './Listings';
import ListingItemDetails from './ListingItemDetails';

const Main = () =>(
    <main>    
        <Switch>
            <Route exact path='/' component={Home}  />
            <Route exact path='/listings' component={Listings}  />
            <Route exact path='/about' component={About} />
            <Route exact path='/listings/:id' component={ListingItemDetails} />
        </Switch>    
    </main>
)
export default Main; 