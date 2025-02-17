import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Result = () => {
    const { image_url } = useParams();  // Destructure image_url from URL parameters


    return (
        <div className="mx-32 my-4 h-screen">
            {/* Render image only if URL exists */}
            {image_url ? (
                <img src={image_url} alt="Uploaded result" className="w-full h-screen border-2" />
            ) : (
                <p>Loading image...</p>  // Display loading message if image isn't ready yet
            )}
        </div>
    );
};

export default Result;
