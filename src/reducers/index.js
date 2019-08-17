import { combineReducers } from 'redux';
import success from './successReducer.js';
import guessedWords from './guessedWordsReducer.js';
import secretWord from './secretWordReducer.js';

export default combineReducers({
  success,
  guessedWords,
  secretWord
});
