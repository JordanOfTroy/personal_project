const initialState = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  image: '',

}

/******************************************************** */
//Action Types
const INITIAL_GRAB = 'INITIAL_GRAB'


/******************************************************** */
//Action Creators

 export function initialGrab (info) {
   return {
     type: INITIAL_GRAB,
     payload: info
   }
 }
 


/******************************************************** */
// Reducer Function

function reducer (state = initialState, action) {
  switch(action.type) {

    case INITIAL_GRAB:
      let {username, firstName, lastName, email, image} = action.payload
      return Object.assign({}, state, {
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        image: image
      })


    default:
      return state
  }
}


export default reducer 