import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Admin from './Admin.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Admin/>, div);
});

it('renders without crashing2', () => {
  shallow(<Admin />);
});

it('renders welcome message', () => {
  const wrapper = shallow(<Admin />);
  const title = <h1>Admin Page</h1>;
  expect(wrapper.contains(title)).toEqual(true);
});

it('renders edit contact info button', () => {
  const wrapper = shallow(<Admin />);
  const button = <li className="list-group-item"><button className = "btn">Edit Contact Info</button></li>;
  expect(wrapper.contains(button)).toEqual(true);
});



it('renders edit contact info button', () => {
  const wrapper = shallow(<Admin />);
  const button = <li className="list-group-item"><button className = "btn">Edit Contact Info</button></li>;
  expect(wrapper.contains(button)).toEqual(true);
});

it('renders edit research pubs button', () => {
  const wrapper = shallow(<Admin />);
  const button = <li className="list-group-item"><button className = "btn">Edit Research Publications</button></li>
  expect(wrapper.contains(button)).toEqual(true);
});

it('renders post videos button', () => {
  const wrapper = shallow(<Admin />);
  const button = <li className="list-group-item"><button className = "btn">Post Videos</button></li>
  expect(wrapper.contains(button)).toEqual(true);
});

it('renders edit tools button', () => {
  const wrapper = shallow(<Admin />);
  const button = <li className="list-group-item"><button className = "btn">Edit Tools</button></li>
  expect(wrapper.contains(button)).toEqual(true);
});

it('renders view QI meetings button', () => {
  const wrapper = shallow(<Admin />);
  const button = <li className="list-group-item"><button className = "btn">View QI Meetings</button></li>
  expect(wrapper.contains(button)).toEqual(true);
});

it('renders edit sponsors button', () => {
  const wrapper = shallow(<Admin />);
  const button = <li className="list-group-item"><button className = "btn">Edit Sponsors</button></li>
  expect(wrapper.contains(button)).toEqual(true);
});
