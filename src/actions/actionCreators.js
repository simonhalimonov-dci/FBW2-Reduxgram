// An actionCreator is a function that will create an action (object) and dispatch it

// increment action creator
export function increment (postID) {

  // action object
  return {
    type: 'INCREMENT_LIKES',
    postID
  }
}

// add comment action creator
export function addComment (postID, author, comment) {
  
  // action object
  return {
    type: 'ADD_COMMENT',
    postID,
    author,
    comment
  }
}

// remove comment action creator
export function removeComment (postID, commentIndex) {
  
  // action object
  return {
    type: 'REMOVE_COMMENT',
    postID,
    commentIndex
  }
}