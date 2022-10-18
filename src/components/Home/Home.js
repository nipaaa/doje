import React from 'react';
import Album from './Album';
import Banner from './Banner';
import TabSection from './TabSection';

const Home = () => {
    return (
        <div>
           <Banner/>
           <TabSection/>
           <Album/> 
        </div>
    );
};

export default Home;