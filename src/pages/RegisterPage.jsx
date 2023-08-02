import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const RegisterPage = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: {
        errors
    } } = useForm();

    const { signup, isAuthenticaded, errors: registerErrors } = useAuth();

    useEffect(() => {
        if (isAuthenticaded) return navigate('/task');
    }, [isAuthenticaded])

    const formOnSubmit = handleSubmit(async (values) => {
        await signup(values);
    });

    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center mt-3">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="card border-primary">
                            <div className="card-header text-center">Register Task App 👨‍💻</div>
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
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Username"
                                        autoComplete="off"
                                        {...register('username', { required: true })}
                                    />
                                    {errors.username && <p className='text-danger'>Username is required</p>}
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
                                        Register
                                    </button>
                                    <p className="text-start text-info mt-2">Already have an account? <Link to="/login">Login</Link></p>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
