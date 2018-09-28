import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-dark bg-dark text-white mb-4">
                <div className="container">
                    <Link to="/" className="navbar-brand">React Speedruns</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;
