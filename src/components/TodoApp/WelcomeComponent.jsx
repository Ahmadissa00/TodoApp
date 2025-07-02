import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { retrieveHelloWorldBean, retrieveHelloWorldPath } from './api/HelloWorldapi';
import { AuthContext, useAuth } from './security/AuthContext';

export default function WelcomeComponent() {

    const authContext = useAuth()
    // const username = authContext.username;

    function callHelloWorldRestApi() {
        //retrieveHelloWorldBean()
            // .then( (response) => successfulResponse(response))
            // .catch( (error) => errorResponse(error))
            // .finally(() => console.log('API call completed'));

        retrieveHelloWorldPath('ahmad', authContext.token)
            .then( (response) => successfulResponse(response))
            .catch( (error) => errorResponse(error))
            .finally(() => console.log('API call completed'));


    }

    function successfulResponse(response) {
        console.log(response);
        setMessage(response.data.message);
    }

    function errorResponse(error) {
        console.error('Error calling API:', error);
    }

    const [message , setMessage] = React.useState('');

    const { username } = useParams();
    return (
        <div className="WelcomeComponent" style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Welcome {authContext.username}</h1>
            <p>Please log in to continue.</p>
            <p>Manage your tasks effectively.</p>
            <Link to="/todos" style={{ textDecoration: 'none', color: 'blue' }}> go to Todos</Link>

            <div style={{ marginTop: '20px' }}>
                <button className='btn btn-success'
                    onClick={callHelloWorldRestApi}
                    style={{ padding: '10px 20px', fontSize: '16px' }} >
                        call hello world rest api
                </button>
            </div>
            <div className='text-info' style={{ marginTop: '20px' }}>
                {message}</div>
        </div>
    );
}