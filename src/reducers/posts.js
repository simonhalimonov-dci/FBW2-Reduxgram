// a reducer takes in two thing
// 1. the action (info about what happened)
// 2. copy of the current state

function posts(state = [], action) {
  console.log(state, action)
  
  return state
}

export default posts