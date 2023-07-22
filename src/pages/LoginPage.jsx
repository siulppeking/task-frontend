import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Loading } from '../components/Loading';

export const LoginPage = () => {

    const { register, handleSubmit, formState: {
        errors
    } } = useForm();

    const { signin, loading, isAuthenticaded, errors: registerErrors } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticaded) {
            navigate('/task');
        }
    }, [isAuthenticaded])


    const formOnSubmit = handleSubmit(async (values) => {
        await signin(values);
    });

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center mt-3">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="card border-primary">
                        <div className="card-header text-center">Login Task App </div>
                        <div className="card-body">
                            {
                                registerErrors.map((error, index) => {
                                    return (
                                        <div className="alert alert-danger" key={index}>
                                            {error}
                                        </div>
                                    )
                                })
                            }
                            <form onSubmit={formOnSubmit} >
                                <input type="email"
                                    className="form-control mt-2"
                                    placeholder="Email Address"
                                    autoComplete="off"
                                    {...register('email', { required: true })}
                                />
                                {errors.email && <p className='text-danger'>Email is required</p>}
                                <input type="password"
                                    className="form-control mt-2"
                                    placeholder="Password"
                                    {...register('password', { required: true })}
                                />
                                {errors.password && <p className='text-danger'>Password is required</p>}
                                <button className="btn btn-outline-success mt-2" type="submit">
                                    Login
                                </button>
                                <Link to={'/'} className="btn btn-outline-warning mt-2 ms-2">
                                    Home
                                </Link>
                                <p className="text-start text-info mt-2">
                                    Don't have an account? <Link to="/register">Register</Link>
                                </p>
                            </form>
                            {
                                loading && <Loading />
                            }
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
