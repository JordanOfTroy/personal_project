const initialState = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  numOfCartItems: 0
}

/******************************************************** */
//Action Types
const INITIAL_GRAB = 'INITIAL_GRAB',
      SET_NUM_OF_CART_ITEMS = 'SET_NUM_OF_CART_ITEMS'
      // UPDATE_USER_INFO = 'UPDATE_USER_INFO'


/******************************************************** */
//Action Creators

 export function initialGrab (info) {
   return {
     type: INITIAL_GRAB,
     payload: info
   }
 }

 export function setNumOfCartItems (num) {
   return {
     type: SET_NUM_OF_CART_ITEMS,
     payload: num
   }
 }


/******************************************************** */
// Reducer Function

function reducer (state = initialState, action) {
  switch(action.type) {

    case INITIAL_GRAB:
      let {username, firstName, lastName, email} = action.payload
      return Object.assign({}, state, {
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
      })

    case SET_NUM_OF_CART_ITEMS:
      return Object.assign({}, state, {numOfCartItems: action.payload})



    default:
      return state
  }
}


export default reducer 