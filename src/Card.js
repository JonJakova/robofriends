import React from 'react';

function Card({id, name, email}) {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 bw2 shadowd-5'>
            <img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;