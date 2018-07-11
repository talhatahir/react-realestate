import React  from 'react';
import Counter from './Counter';
import store from '../store/';

const About =() => (
    <div>
        <h1>About </h1>   
        <Counter  store ={store}/>         
    </div>
)
  
export default About;
  