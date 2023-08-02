import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const Navbar = () => {

    const { user, logout } = useAuth();
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>AppTask 📱</Link>
                    <button id='navbar-button' className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to='/task' >View Tasks 🗒️</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to='/task-add' >Add Task ✍️</Link>
                            </li>
                        </ul>
                        <form className="d-flex align-items-center">
                            <span className='text-success me-1'><strong>Connected as: </strong></span>
                            <span className='text-info me-3'>@<strong>{user.username}</strong></span>
                            <button className="btn btn-outline-danger my-2 my-sm-0" type="button"
                                onClick={logout}
                            >Logout 🔒</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
