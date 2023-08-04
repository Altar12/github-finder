import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {FETCH_USERS, CLEAR_USERS, FETCH_USER, FETCH_USER_REPOS, SET_LOADING} from '../types';

const GithubState = (props) => {
    const initialState = {
        users: [],
        user: null,
        userRepos: [],
        loading: false
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //fetch users
    const fetchUsers = async (text) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({type: FETCH_USERS, payload: res.data.items});
      };

    //clear users
    const clearUsers = () => dispatch({type: CLEAR_USERS});

    //fetch user
    const fetchUser = async (userName) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({type: FETCH_USER, payload: res.data});
      }

    //fetch user repos
    const fetchUserRepos = async (userName) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({type: FETCH_USER_REPOS, payload: res.data});
      }

    //set loading
    const setLoading = () => dispatch({type: SET_LOADING});

    return (
        <GithubContext.Provider
            value = {{users: state.users, user: state.user, userRepos: state.userRepos, loading: state.loading, fetchUsers, clearUsers, fetchUser, fetchUserRepos}}>
            {props.children}
        </GithubContext.Provider>
    );
    
};

export default GithubState;