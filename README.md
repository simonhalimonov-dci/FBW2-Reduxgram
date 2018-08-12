# Reactstagram by Wes Bos in 2018

This is a reinterpretation of the "Learn Redux" course by Wes Bos. I did this, because many of the libraries that he uses in that 2 year old course are deprecated and no longer maintained by the authors.

This version doesn't connect the router to the redux store, because this is not advised by the creators of react-router-dom. [Redux Integration with React Router.](https://reacttraining.com/react-router/web/guides/redux-integration)

## Minimal required setup

There are actually quite a lot of steps included to make this React + Redux application run. Here is a list of the steps that we need to take to get to a point, where we can actually see stuff happening.

### Steps:

1. Use `create-react-app` to create a new project
2. Install additional packages via yarn: `yarn add react-router-dom redux react-redux`
3. Set up the main components: `./components/Main.js`, `./components/PhotoGrid.js`, `./components/Single.js`
4. Set up the routing in: `./App.js` 
5. Set up the `Provider` from `react-redux` in `./index.js`
6. Create a store in `./Store.js`
  1. Add the default data from `./data/comments.js` and `./data/posts.js`
  2. Create the store with the `createStore` function from Redux and pass it the reducer and the defaultState
  3. Create the actions in `./actions/actionCreators.js`
  4. Create the reducers in `./reducers/comments.js`, `./reducers/posts.js`
  5. Import the reducers into the rootReducer and combine the with the `combineReducers({comments, posts})`. Everything should be working right now and you can continue up to **video 7**.