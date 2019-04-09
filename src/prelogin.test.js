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

it('renders home nav', () => {
  const wrapper = shallow(<PreLogin />);
  const nav = <li><NavLink className="nav-item preNavItem preLink" exact to="/">Home</NavLink></li>;
  expect(wrapper.contains(nav)).toEqual(true);
});

it('renders login nav', () => {
  const wrapper = shallow(<PreLogin />);
  const nav = <li><NavLink className="nav-item preNavItem preLink" to="/LoginBox">Login</NavLink></li>;
  expect(wrapper.contains(nav)).toEqual(true);
});
it('renders understanding connect-home nav', () => {
  const wrapper = shallow(<PreLogin />);
  const nav = <li><NavLink className="nav-item preNavItem preLink" to="/Understand">Understanding Connect Home</NavLink></li>;
  expect(wrapper.contains(nav)).toEqual(true);
});
it('renders services nav', () => {
  const wrapper = shallow(<PreLogin />);
  const nav = <li><NavLink className="nav-item preNavItem preLink" to="/Services">Services and Supports</NavLink></li>;
  expect(wrapper.contains(nav)).toEqual(true);
});
it('renders news nav', () => {
  const wrapper = shallow(<PreLogin />);
  const nav = <li><NavLink className="nav-item preNavItem preLink" to="/News">News</NavLink></li>;
  expect(wrapper.contains(nav)).toEqual(true);
});
it('renders about nav', () => {
  const wrapper = shallow(<PreLogin />);
  const nav = <li><NavLink className="nav-item preNavItem preLink" to="/About">About Us</NavLink></li>;
  expect(wrapper.contains(nav)).toEqual(true);
});
it('renders contact nav', () => {
  const wrapper = shallow(<PreLogin />);
  const nav = <li><NavLink className="nav-item preNavItem preLink" to="/contact">Contact</NavLink></li>;
  expect(wrapper.contains(nav)).toEqual(true);
});

//it('renders welcome message', () => {
//  const wrapper = shallow(<PreLogin />);
//  const login = <li>Understanding Connect Home</li>;
//  expect(wrapper.contains(login)).toEqual(true);
//});
