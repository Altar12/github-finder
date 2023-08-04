import React from 'react';
import {Link} from 'react-router-dom';

const UserItem = (props) => {
    const {login, avatar_url} = props.user;

    return (
        <div className="user-item">
            <img src={avatar_url} alt="user avatar" />
            <h3>{login}</h3>
            <span className="fetch-user-btn"><Link className="user-link" to={`/user/${login}`}>Know more</Link></span>
        </div>
    );
};

export default UserItem;