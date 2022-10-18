import React from 'react';

const Banner = () => {
    return (
        <div className='banner d-flex flex-column justify-content-center align-items-center gap-y-5'>
            <h1>Doje</h1>
            <p>C’est bien ou c’est pas bien ?</p>
            <button type="button" class="btn btn-dark rounded-pill px-3">What is Doje?</button>
        </div>
    );
};

export default Banner;