import { 
    CHANGE_SEARCH_FIELD, 
     REQUEST_ROBOTS_PENDING,
     REQUEST_ROBOTS_SUCCESS,
     REQUEST_ROBOTS_FAILED} from "./constants"

const intialStateSearch = {
    searchField:''
}

export const searchRobots = (state=intialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:  
            return Object.assign({}, state, {searchField: action.playload});
        default: return state;
        }
} 

const intialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=intialStateRobots, action={}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({},state,{isPending: true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({},state,{robots: action.playload,isPending: false});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({},state,{error: action.playload,isPending: false});
         default: return state;
     }
}