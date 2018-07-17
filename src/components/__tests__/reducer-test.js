import React from 'react';
import { shallow, mount, render } from 'enzyme';
import reducer from '../../store/reducer';


// describe what we are testing
describe('Request Reducer', () => { 
    // make our assertion and what we expect to happen 
    it('Reducer has default state', () => {
      expect(reducer(undefined, {type:'unexpected' })).toEqual({
        listings : [],
        hasFetched: false         
      });
    });
   });