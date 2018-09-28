import React, { Component } from 'react';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />

            <main role="main">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Layout;

