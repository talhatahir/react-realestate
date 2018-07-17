import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Home from '../Home';


// describe what we are testing
describe('Home Component', () => { 
    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
      expect(shallow(<Home />).find('.home').exists()).toBe(true)
    })
   })