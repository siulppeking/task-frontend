import React from 'react'
import { useAuth } from './context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRouters = () => {
    const { loading, isAuthenticaded } = useAuth();

    if (loading) return <></>;
    if (!isAuthenticaded && !loading) return <Navigate to="/login" replace />;

    return (<Outlet />);
}


