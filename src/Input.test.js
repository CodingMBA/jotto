import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input, { UnconnectedInput } from './Input';

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
  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    it('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    it('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });
    it('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });
  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    it('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    it('does not render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });
    it('does not render submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    });
  });
});

describe('redux props', () => {
  it('has success piece of state as a prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('`guessWord` action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});
describe('`guessWord` action creator call', () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = 'train';
  // set up mock for `guessWord`
  beforeEach(() => {
    guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock,
      success: false,
      guessedWords: []
    };
    // set up app component with guessWordMock as the guessWord prop
    wrapper = shallow(<UnconnectedInput {...props} />);
    // add value to input box
    wrapper.instance().inputBox.current = { value: guessedWord };
    // simulate click
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });
  });
  it('calls `guessWord` when submit button clicked', () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });
  it('calls `guessWord` with input value as argument', () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  });
  it('clears the input box on submit', () => {
    expect(wrapper.instance().inputBox.current.value).toBe('');
  });
});
