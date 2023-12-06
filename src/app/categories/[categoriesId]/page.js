import React from 'react';

const newsDetails = ({ params, searchParams }) => {
    return (
        <div>
            <h1>Details news : {searchParams?.category}</h1>
        </div>
    );
};

export default newsDetails;