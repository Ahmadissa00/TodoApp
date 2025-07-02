import './Todo.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import ErrorComponent from './ErrorComponent';
import TodosComponent from './TodosComponent';
import LogoutComponent from './LogoutComponent';
import { AuthProvider, useAuth } from './security/AuthContext';
import TodoComponent from './TodoComponent';


function AuthenticatedRoute({children}) {
    const authContext = useAuth();
    return authContext.isAuthenticated ? children : <Navigate to="/" />;
}

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/" element={<LoginComponent />} />


                        <Route path="/welcome/:username"
                                 element={
                                 <AuthenticatedRoute>
                                     <WelcomeComponent /> 
                                 </AuthenticatedRoute>  
                                 } 
                        />

                        <Route path="/todos" 
                                element={
                                <AuthenticatedRoute>
                                <TodosComponent />
                                </AuthenticatedRoute>
                                }
                        />

                        <Route path="/todos/:id" 
                                element={
                                <AuthenticatedRoute>
                                <TodoComponent />
                                </AuthenticatedRoute>
                                }
                        />

                        <Route path="/logout" 
                                element={
                                <AuthenticatedRoute>
                                    <LogoutComponent />
                                </AuthenticatedRoute>
                               } 
                        />
                       
                       
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}