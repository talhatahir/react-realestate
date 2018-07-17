import React from 'react';
import { shallow } from 'enzyme';
import About from '../About';


// describe what we are testing
describe('About Component', () => { 
    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
      expect(shallow(<About />).find('.about').exists()).toBe(true)
    })
   })