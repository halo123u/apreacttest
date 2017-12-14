import React from 'react';

import SingleImg from './SingleImg';

import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
let imageRow = [
    {'src' : img3, 'alt': '3.png','title': 'East Josianefurt','addr' : '085 Daron Via'},
    {'src' : img4,'alt': '4.png','title': 'South Cristopherport','addr' : '162 Chandler Ville'},
    {'src' : img5,'alt': '5.png','title': 'Concepcionbury','addr' : '7643 Kylie Burgs'},
    {'src' : img6,'alt': '6.png','title': 'Reychester','addr' : '5590 Gabe Views Apt. 044'}
];

const MainBodyBottom = (props) => {
    return (
        <div className="mainBottom"> 
            <h3>Maul By The Best Way Around The Island</h3>
            <div className="imageRow">
                {imageRow.map((item, key) => {
                    return <SingleImg item={item} key={key}/>
                })
                }   
            </div>
        </div> 
    );
}

export default MainBodyBottom;