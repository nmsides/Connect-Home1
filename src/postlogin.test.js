import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PostLogin from './PostLogin.js';

it('renders without crashing', () => {
  shallow(<PostLogin />);
});

it('allows user login', () => {
  const wrapper = shallow(<PostLogin />);
  const welcome = <h1>Welcome, ________ !</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it('contains calendar link', () => {
  const wrapper = shallow(<PostLogin />);
  const nav = <a class="preLink" href="#">Calendar</a>;
  expect(wrapper.contains(nav)).toEqual(true);
});

it('contains QI link', () => {
  const wrapper = shallow(<PostLogin />);
  const nav = <a class="preLink" href="#">Quality Improvement Tools</a>;
  expect(wrapper.contains(nav)).toEqual(true);
});

it('contains transitional care link', () => {
  const wrapper = shallow(<PostLogin />);
  const nav = <a class="preLink" href="#">Connect-Home Transitional Care Tools and Resources</a>;
  expect(wrapper.contains(nav)).toEqual(true);
});

it('contains overview link', () => {
  const wrapper = shallow(<PostLogin />);
  const nav = <a class="preLink" href="#">Overview</a>
  expect(wrapper.contains(nav)).toEqual(true);
});

it('contains contact info link', () => {
  const wrapper = shallow(<PostLogin />);
  const nav = <a class="preLink" href="#">Contact Information</a>;
  expect(wrapper.contains(nav)).toEqual(true);
});


// it('renders welcome message', () => {
//   const wrapper = shallow(<Admin />);
//   const title = <h1>Admin Page</h1>;
//   expect(wrapper.contains(title)).toEqual(true);
// });
