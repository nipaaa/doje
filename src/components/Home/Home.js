import React from 'react';
import Album from './Album';
import Banner from './Banner';
import Faq from './Faq';
import TabSection from './TabSection';

const Home = () => {
    return (
        <div>
           <Banner/>
           <TabSection/>
           <Album/> 
           <Faq/>
        </div>
    );
};

export default Home;