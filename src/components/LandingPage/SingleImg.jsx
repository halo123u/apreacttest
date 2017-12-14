import React from 'react';

const SingleImg = (props) => {
    console.log(props);
    return(
        <div className="singleImg">
            <img className="image" alt={props.item.alt} src={props.item.src}/>
            <h5>{props.item.title}</h5>
            <h6 className="caption">{props.item.addr}</h6>
        </div>
    )
}

export default SingleImg;