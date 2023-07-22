import React from 'react'
import { useAuth } from './context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';
import { Loading } from './components/Loading';

export const ProtectedRouters = () => {
    const { loading, isAuthenticaded } = useAuth();

    if (loading) return <Loading />;
    if (!isAuthenticaded && !loading) return <Navigate to="/login" replace />;

    return (<Outlet />);
}


