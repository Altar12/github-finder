import React, {useContext} from 'react';
import UserItem from './UserItem';
import Spinner from './Spinner';
import GithubContext from "../contexts/github/githubContext";

const UserItems = () => {
    const githubContext = useContext(GithubContext);
    const {users, loading} = githubContext;

    if(loading) {
        return (
            <div className="user-items">
                <Spinner />
            </div>
            );
    }

    return(
        <div className="user-items">
            { users.map((user) => {
                return <UserItem key={user.id} user={user} />;
            })  
            }
        </div>
    );
};

export default UserItems;