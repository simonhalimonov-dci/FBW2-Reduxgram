import { totalmem } from "os";

// a reducer takes in two thing
// 1. the action (info about what happened)
// 2. copy of the current state

function posts(state = [], action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      console.log("Incrementing likes of: ", action.postID);

      // Create a copy of the current state and iterate over the items until an item with the right id is found. When the right item is found, we increase its likes count.
      const newState = [...state].reduce((total, item) => {
        if(item.id == action.postID) {
          item.likes++;
          total.push(item)
          return total
        } else {
          total.push(item)
          return total
        }
      }, [])
      return newState
    default:
      return state
  }
}

export default posts