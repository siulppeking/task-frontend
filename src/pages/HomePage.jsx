import React from 'react';
import { Link } from 'react-router-dom';
import svg from '../assets/task_completed.svg'

export const HomePage = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>AppTask 📱</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">

            </ul>
            <form className="d-flex align-items-center">
              <Link className="btn btn-outline-success my-2 my-sm-0"
                to={'/login'}
              >Login 🔒</Link>
            </form>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          <div className="row mt-3">
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
              <h1>Task App 🗒️</h1>
              <h5>
                <small className="text-body-secondary">The application that you need. ✨</small>
              </h5>
              <div className="row">

                <p className="lead">Organize your daily tasks in a single application with different priorities according to your daily routine. <br />
                  <span className="badge rounded-pill bg-success">Low 😴</span>
                  <span className="badge rounded-pill bg-warning ms-1">Medium 🤓</span>
                  <span className="badge rounded-pill bg-danger ms-1">High 😵‍💫</span>
                </p>

              </div>

              <div className="row">
                <p className=''>
                  All this completely for free. 🤑 <br /> <br />
                  <Link className='btn btn-primary' to={'/login'}> Get Started 🤩✅</Link>
                </p>
              </div>

            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <figure style={{ width: '90%', margin: 'auto' }}>
                <img src={svg} alt="" width={'100%'} />
              </figure>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
