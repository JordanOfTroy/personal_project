const initialState = {

}

/******************************************************** */
//Action Types
/**Example: Const DO_THE_THING = 'DO_THE_THING */

/******************************************************** */
//Action Creators
/**Example: export function doTheThing (theThing) {
 *              return {
 *                type: DO_THE_THING,
 *                payload: theThing
 *              }
 *          } */



/******************************************************** */
// Reducer Function

function reducer (state = initialState, action) {
  switch (action.type) {
    // case DO_THE_THING:
    //   return Object.assign({}, state, {'propName': action.payload})


    default:
      return state
  }
}


export default reducer 