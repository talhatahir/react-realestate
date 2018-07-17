import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';


// describe what we are testing
describe('App Component', () => { 
    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
      expect(shallow(<App />).find(".App").exists()).toBe(true);
      //expect(wrapper.find(Foo)).to.have.length(3);
    });
   });