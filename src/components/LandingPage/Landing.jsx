import React from 'react';

import TextDesc from '../TextDesc';
import MainBodyTop from './MainBodyTop';
import MainBodyBottom from'./MainBodyBottom';
import Newsletter from './Newsletter';


const Landing = (props) => {
    return(
        <div> 
            <div className="Banner">
                <h1>Hello, Welcome to Reactor</h1>
            </div>
            <div className="subBanner">
                <div className="container">
                    <div className="subBanner_left">
                        <h2>WHAT WE DO</h2>
                    </div>
                    <TextDesc heading={'We do'}/>
                </div>
            </div>

            <MainBodyTop />

            <MainBodyBottom />
            
            <Newsletter />

            <div className="footer">
                Footer
            </div>
        </div>
    );
}

export default Landing;