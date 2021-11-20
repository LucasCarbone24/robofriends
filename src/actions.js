import { 
        CHANGE_SEARCH_FIELD, 
         REQUEST_ROBOTS_PENDING,
         REQUEST_ROBOTS_SUCCESS,
         REQUEST_ROBOTS_FAILED} from "./constants"

export const setSearchfield = (text) => ({
 type:  CHANGE_SEARCH_FIELD,
 playload: text  
})


export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>   response.json())
    .then(data=> dispatch({type: REQUEST_ROBOTS_SUCCESS, playload: data}))
    .catch( error => dispatch({type: REQUEST_ROBOTS_FAILED, playload: error}))
}