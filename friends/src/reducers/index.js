//import actions
import { FETCH_FRIENDS_LOADING, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAIL } from '../actions'

//initial state
const initialState = {
    data: null,
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCH_FRIENDS_LOADING):
            return ({
                ...state,
                isFetching: true
            })
        case (FETCH_FRIENDS_SUCCESS):
            return ({
                ...state,
                data: action.payload,
                isFetching: false
            })
        case (FETCH_FRIENDS_FAIL):
            return ({
                ...state,
                error: action.payload,
                isFetching: false
            })
        default:
            return state;
    }
}