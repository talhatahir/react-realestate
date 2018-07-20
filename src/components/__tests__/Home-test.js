import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

// describe what we are testing
describe('Home Component', () => { 
    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
      expect(shallow(<Home />).find('.home').length).toBe(1);
    })
});
