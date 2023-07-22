import { createContext, useState, useContext, useEffect } from 'react';
import authService from '../services/auth.services';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticaded, setIsAuthenticaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    // clean error messages after 5 seconds
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    const signup = async (user) => {
        try {
            const res = await authService.register(user);
            localStorage.setItem('token', res.data.token);
            setUser(res.data);
            setIsAuthenticaded(true);
        } catch (error) {
            console.log(error)
            setErrors(error.response.data);
        }
    }

    const signin = async (user) => {
        setLoading(true);
        try {
            const res = await authService.login(user);
            localStorage.setItem('token', res.data.token);

            setUser(res.data);
            setIsAuthenticaded(true);
        } catch (error) {
            console.log(error)
            setErrors(error.response.data);
        }
        setLoading(false);
    }

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticaded(false);
    }


    useEffect(() => {
        const checkLogin = async () => {
            const token = localStorage.getItem('token');
            if (token !== null) {
                try {
                    const resp = await authService.verifyToken();
                    if (!resp.data) {
                        setIsAuthenticaded(false);
                        setUser(null);
                        return;
                    }
                    setIsAuthenticaded(true);
                    setUser(resp.data);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    localStorage.removeItem('token');
                    setIsAuthenticaded(false);
                    setUser(null);
                    setLoading(false);
                }
            } else {
                setIsAuthenticaded(false);
                setLoading(false);
                return;
            }
        }
        checkLogin();
    }, [])



    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            isAuthenticaded,
            errors,
            logout,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
}