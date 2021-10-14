import React from 'react';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar'

const Homepage = () => {
    return (
        <div className='homepage'>
            <Header />
            <Main />
            <Sidebar />
        </div>
    )
}

export default Homepage
