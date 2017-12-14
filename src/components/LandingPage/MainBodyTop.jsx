import React from 'react';
import TextDesc from '../TextDesc';

import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';

const MainBodyTop = (props) => {
    return (
        <div className="mainBody">
            <div className="bodyContainer">
                <div className="innerBody">
                    <img className="image" src={img1} alt="1.png"/>
                    <TextDesc heading={'Regional Cuisine Down Home \n Southern Cooking'} />
                </div>

                <div className="innerBody">
                    <img className="image" src={img2} alt="2.png"/>
                    <TextDesc heading={'Pos Hardware More Options In \n Less Space'} />
                </div>
            </div>
        </div>
    );
}

export default MainBodyTop;