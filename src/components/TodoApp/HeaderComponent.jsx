import React, { use, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, useAuth } from './security/AuthContext';

export default function HeaderComponent() {

    const authcontext = useAuth();
    const isAuthenticated = authcontext.isAuthenticated;

    

    function logout() {
        authcontext.logout();}

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm mb-4">
                <div className="container">
                   
                    <p className="navbar-brand fw-bold" style={{ color: '#333' }}>
                        Todo Application
                    </p>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {isAuthenticated && (
                                <Link to="/welcome/:username" className="nav-link">Home</Link>)}
                            </li>
                            <li className="nav-item">
                                {!isAuthenticated && (
                                <Link to="/login" className="nav-link">Login</Link>
                                )}
                            </li>

                            <li className="nav-item">
                                {isAuthenticated && (
                                <Link to="/todos" className="nav-link">Todos</Link>
                                )}
                            </li>
                            <li className="nav-item">
                                {isAuthenticated && (
                                <Link to="/logout" className="nav-link" onClick={logout}>Logout</Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
