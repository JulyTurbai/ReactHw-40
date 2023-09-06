import React from 'react';

const GetRandomDog = ({ img, clickHandler }) => {
    return (
        <div className='random-block'>
            <button className='random-btn' onClick={() => clickHandler()}>Get random dog</button>
            
            <div className="dog-single-img">
                <img src={ img } alt="" />
            </div>
        </div>
    );
};

export default GetRandomDog;