import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className='bg-img'>
                <div className="banner-text mt-5">
                    <h1>Best Solution <br />to Study at Home</h1>
                </div>
                <div className="banner-btn">
                    <button className='btn btn-warning mt-3'>See Courses</button>
                    <button className='btn btn-success ms-3 mt-3'>Take Lesson</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;