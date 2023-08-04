import React, {Fragment, useEffect, useContext} from 'react';
import Spinner from './Spinner';
import GithubContext from '../contexts/github/githubContext';
import {Link} from 'react-router-dom';

const User = () => {
    const githubContext = useContext(GithubContext);
    const {user, userRepos, loading, fetchUser, fetchUserRepos} = githubContext;
    useEffect(() => {
        const currentUser = (window.location.pathname.split('/'))[2];
        console.log(currentUser);
        fetchUser(currentUser);
        fetchUserRepos(currentUser);
    }, []);


    if(loading || user===null) {
        return (
            <div className="user-details">
                <Spinner />
            </div>
        );
    }

    const { login,
            avatar_url,
            html_url,
            name,
            company,
            blog,
            location,
            email,
            hireable,
            bio,
            twitter_username,
            public_repos,
            public_gists,
            followers,
            following } = user;

    return (
        <div className="user-details">
            <span className="back-home-button"><Link to="/" className="home-link">Back to Search</Link></span>
            { hireable!==null &&
              <p className="hireable">Hireable: <span className={hireable?'fa fa-check':'fa fa-times'}></span></p>  
            }
            <div className="user-card">
                <div className="user-card-left">
                    <img src={avatar_url} alt="user avatar" />
                    <h3>{name}</h3>
                    { location &&
                      <p><span className="user-attribute">Location: </span>{location}</p>
                    }
                </div>
                <div className="user-card-right">
                    { bio &&
                      <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                      </Fragment>
                    }
                    <p><span className="user-attribute">Username: </span>{login}</p>
                    { company &&
                      <p><span className="user-attribute">Company: </span>{company}</p>
                    }
                    { blog &&
                      <p><span className="user-attribute">Website: </span>{blog}</p>
                    }
                    <span className="visit-github-button"><a href={html_url} className="github-link">Visit Github Profile</a></span>
                    { email &&
                      <p><span className="fa fa-envelope"></span>{email}</p>
                    }
                    { twitter_username &&
                      <p><span className="fa fa-twitter"></span>{`@${twitter_username}`}</p>
                    }
                </div>
            </div>
            <div className="stat-section">
                <span className="user-stats yellow">{`Followers: ${followers}`}</span>
                <span className="user-stats orange">{`Following: ${following}`}</span>
                <span className="user-stats red">{`Public Repos: ${public_repos}`}</span>
                <span className="user-stats violet">{`Public Gists: ${public_gists}`}</span>
            </div>
            <div className="repos">
                { userRepos.map((repo) => {
                    return (
                        <div className="repo">
                            <a href={repo.html_url}>{repo.name}</a>
                        </div>
                    );
                }) 
                }
            </div>
        </div>
    );
};

export default User;