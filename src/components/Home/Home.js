import React from 'react';
import Footer from '../Shared/Footer';
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
           <div className='footer'>
           <Faq/>
           <Footer/>
           </div>
          
        </div>
    );
};

export default Home;