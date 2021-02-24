import { axiosWithAuth } from './../utils/axiosWithAuth'

export const FETCH_FRIENDS_LOADING = "FETCH_FRIENDS_LOADING";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAIL = "FETCH_FRIENDS_FAIL";

export const getFriends = () => dispatch => {
    dispatch(fetchFriendsLoading());

    axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res)
            // dispatch(fetchFriendsSuccess(res))
        })
        .catch(err => {
            dispatch(fetchFriendsFail(err))
        })
}

export const getToken = () => dispatch => {
    return;
}

export const fetchFriendsLoading = () => {
    return ({ type: FETCH_FRIENDS_LOADING })
}

export const fetchFriendsSuccess = (friends) => {
    return ({ type: FETCH_FRIENDS_SUCCESS, payload: friends })
}

export const fetchFriendsFail = (error) => {
    return ({ type: FETCH_FRIENDS_FAIL, payload: error })
}

//didnt quite make it work with redux but I learned a bit