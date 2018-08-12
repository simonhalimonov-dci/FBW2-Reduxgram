function postComments (state= [], action) {
  // Return a new array and add an additional comment object
  return [
    ...state,
    {
      user: action.author,
      text: action.comment
    }
  ];
}

function removeComment (state=[], action) {
  // Use the filter to return a new array without the item at the specified index
  return state.filter((item, i) => {
    return i !== action.commentIndex
  })
}

function comments(state = [], action) {
  const {postID} = action
  switch (action.type) {
    case "ADD_COMMENT":
      // If the action.type is "ADD_COMMENT" we will run this code
      console.log("Adding new comment to:" + postID);
      return {
        ...state,
        // This part uses reducer composition to separate the functionality of adding a comment into a new function calles postComments
        // https://redux.js.org/recipes/structuringreducers/refactoringreducersexample
        [postID] : postComments(state[postID], action)
      };
    case "REMOVE_COMMENT":
      // If the action.type is "REMOVE_COMMENT" we will run this code
      console.log("Removing comment from:" + postID);
      return {
        ...state,
        [postID] : removeComment(state[postID], action)
      };
    default:
    return state
  }
}

export default comments