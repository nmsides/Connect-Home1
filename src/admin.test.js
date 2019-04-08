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