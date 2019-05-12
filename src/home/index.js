import React from 'react';

import './home.css';
import NewList from './NewList';
import List from './List';

const Home = props => {
    return (
        <div className="page-container">
            <NewList />
            <List />
        </div>
    );
}

export default Home;