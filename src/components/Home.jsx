import React, {Fragment} from 'react';
import Searchbox from './Searchbox';
import UserItems from './UserItems';

const Home = () => {
    
    return (
        <Fragment>
            <Searchbox />
            <UserItems />
        </Fragment>
    );
};

export default Home;