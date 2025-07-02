import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function WelcomeComponent() {
    const { username } = useParams();
    return (
        <div className="WelcomeComponent" style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Welcome {username}</h1>
            <p>Please log in to continue.</p>
            <p>Manage your tasks effectively.</p>
            <Link to="/todos" style={{ textDecoration: 'none', color: 'blue' }}> go to Todos</Link>
        </div>
    );
}