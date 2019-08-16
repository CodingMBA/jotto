import { actionTypes } from '../actions/index.js';
import successReducer from './successReducer.js';

it('returns default initial state of `false` when no action passed', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toEqual({ success: false });
});

it('returns state of `true` when receiving action of type `CORRECT_GUESS`', () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toBe(true);
});
