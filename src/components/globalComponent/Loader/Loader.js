import React from 'react';
import Loader from 'react-loader-spinner';

const PageLoader = () => {
    return (
        <div>
             <Loader type="BallTriangle" color="#01ff95" height={80} width={80} />
        </div>
    );
};

export default PageLoader;