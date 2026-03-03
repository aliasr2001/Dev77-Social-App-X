import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    // Check if user data exists in local storage
    const user = localStorage.getItem('user');

    if (!user) {
        // If no user is found, redirect to login page
        return <Navigate to="/login" replace />;
    }

    // If user is logged in, render the protected component
    return children;
};

export default ProtectedRoute;
