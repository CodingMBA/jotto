import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

/**
 * Factory function to create a ShallowWrapper for the Input component
 * @function setup
 * @param {object} initialState - Initial state this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  console.log(wrapper.debug());
};

describe('render', () => {
  describe('word has not been guessed', () => {
    it('renders component without error', () => {});
    it('renders input box', () => {});
    it('renders submit button', () => {});
  });
  describe('word has been guessed', () => {
    it('renders component without error', () => {});
    it('does not render input box', () => {});
    it('does not render submit button', () => {});
  });
});

describe('update state', () => {});
