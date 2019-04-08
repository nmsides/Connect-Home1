import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PreLogin from './PreLogin.js';


it('renders without crashing', () => {
  shallow(<PreLogin />);
});
    
//it('renders welcome message', () => {
//  const wrapper = shallow(<PreLogin />);
//  const login = <li>Understanding Connect Home</li>;
//  expect(wrapper.contains(login)).toEqual(true);
//});