// Import the createStore function from redux
import { createStore } from 'redux';

// Import reducer
import rootReducer from './reducers/index'

// Import data
import comments from './data/comments'
import posts from './data/posts'

// Create a default object for the default state
const defaultState = {
  comments,
  posts
}

const store = createStore(rootReducer, defaultState)

export default store;