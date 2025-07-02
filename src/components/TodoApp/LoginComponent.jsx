import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

export default function LoginComponent() {
    const [isLoggedIn, setIsLoggedIn] = React.useState("ahmad");
    const [isLoggedInPass, setIsLoggedInPass] = React.useState("123");
    const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
    const [showErrorMessage, setShowErrorMessage] = React.useState(false);
    const navigate = useNavigate();
    const authContext = useAuth();

    function setstatname(e) {
        setIsLoggedIn(e.target.value);
    }

    function setstatpass(e) {
        setIsLoggedInPass(e.target.value);
    }

    async function handleSubmit() {
        if (await authContext.login(isLoggedIn, isLoggedInPass)) {
            setShowErrorMessage(false);
            setShowSuccessMessage(true);
            navigate(`/welcome/${isLoggedIn}`);
        } else {
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }

    return (
        <div className="LoginComponent" style={{ textAlign: 'center', marginTop: '20px' }}>
            <div className="loginForm" style={{ display: 'inline-block', textAlign: 'left' }}>
                <div className='container'>
                    <label>Name</label>
                    <input type="text" value={isLoggedIn} name='name' onChange={setstatname} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={isLoggedInPass} name='password' onChange={setstatpass} />
                </div>
                <button style={{ marginTop: '10px' }} onClick={handleSubmit}>Login</button>
            </div>
            {showSuccessMessage && (
                <div className="successMessage" style={{ color: 'green', marginTop: '20px' }}>
                    <p>Login successful!</p>
                </div>
            )}
            {showErrorMessage && (
                <div className="errorMessage" style={{ color: 'red', marginTop: '20px' }}>
                    <p>Invalid credentials. Please try again.</p>
                </div>
            )}
        </div>
    );
}