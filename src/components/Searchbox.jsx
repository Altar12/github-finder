import React, { useState, useContext } from 'react';
import GithubContext from '../contexts/github/githubContext';

const Searchbox = () => {
    const githubContext = useContext(GithubContext);
    const {users, clearUsers} = githubContext;

    const [text, setText] = useState('');
    const [alert, setAlert] = useState(null);
    
    const onChange = (event) => {
        setText(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (text.length > 0) {
            githubContext.fetchUsers(text);
            setText('');
        } else {
            setAlert(<p className="alert">Please enter github username to search</p>);
            setTimeout(() => setAlert(null), 3000);
        }
    }
    const onClearBtnClick = () => {
        clearUsers();
    }

    return (
        <div className="form">
            <form onSubmit={onSubmit}>
                {alert}
                <input type="text" value={text} onChange={onChange} placeholder="user to search..." className="user-input" />
                <input type="submit" value="Search" className="search-button" />
            </form>
            { users.length > 0 && 
              <span className="clear-button" onClick={onClearBtnClick}>Clear Search</span>

            }
        </div>
    );
};

export default Searchbox;