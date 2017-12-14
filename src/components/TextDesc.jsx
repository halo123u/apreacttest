import React from 'react';

const TextDesc = (props) => {
    console.log(props);
    return (
        <div className="textContainer">
            <h4>{props.heading.split('\n').map((word, key) => {
                return <span key={key}>{word}<br/></span>
            })}</h4>
            <p>The quick,brown fox jumps over a lazy dog. <br/>DJs flock by when MTV ax quiz prog.<br/> Junk MTV quiz graced by fox whelps.<br/> Bawds jog, flick quartz, vex nymphs.</p>
        </div>
    )
}

export default TextDesc;