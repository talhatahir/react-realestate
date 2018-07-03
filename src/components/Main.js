import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Search from './Search';

const Main = () =>(
    <main>    
        <Switch>
            <Route exact path='/' component={Home}  />
            <Route exact path='/search' component={Search}  />
            <Route exact path='/about' component={About} />
        </Switch>    
    </main>
)
export default Main; 