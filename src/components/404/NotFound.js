import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="notFound">
            <h1 className="notFoundTitle">Page Not Found</h1>
            <p>The requested page does not exit.</p>
            <Link to="/CryptoInfo/" className="notFoundLink">Go to homepage</Link>
        </div>
    );
}

export default NotFound;