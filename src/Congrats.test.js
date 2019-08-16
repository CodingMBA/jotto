import React from 'react'
import {shallow} from 'enzyme'

import { findByTestAttr, checkProps } from '../test/testUtils'
import Congrats from './Congrats'

const defaultProps = { success: false }

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper} 
 */
const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props} 
  return shallow(<Congrats {...setupProps} />)
}

it('renders without error', () => {
  const wrapper = setup({ success: false })
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.length).toBe(1)
})

it('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false } )
  const component = findByTestAttr(wrapper, 'component-congrats')
  expect(component.text()).toBe('')
})

it('renders non-empty message when success props is true', () => {
  const wrapper = setup({ success: true } )
  const message = findByTestAttr(wrapper, 'congrats-message')
  expect(message.text().length).not.toBe(0)
})

it('does not throw warning with expected props', () => {
  const expectedProps = { success: false }
  checkProps(Congrats, expectedProps)
})

