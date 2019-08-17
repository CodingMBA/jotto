import { combineReducers } from 'redux';
import success from './successReducer.js';
import guessedWords from './guessedWordsReducer.js';

export default combineReducers({
  success,
  guessedWords
});
