import React from 'react';

//here we are including the PROGRESS BAR

export const Loading = () => {
    return (
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </div>
    );
}