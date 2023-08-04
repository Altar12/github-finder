import {FETCH_USERS, CLEAR_USERS, FETCH_USER, FETCH_USER_REPOS, SET_LOADING} from '../types';

const githubReducer = (state, action) => {

    switch(action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            };
        case FETCH_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        case FETCH_USER_REPOS:
            return {
                ...state,
                userRepos: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
    
}

export default githubReducer;