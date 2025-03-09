import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center space-y-4">
                <h1 className="text-4xl text-red-400 font-bold">404!</h1>
                <p>Page Not Found!</p>
                <Link to="/" className="btn rounded-none bg-[#038FAF]">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;