import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import { useTask } from '../context/TaskContext';
import { Navbar } from '../components/Navbar';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export const TaskForm = () => {

  const { register, handleSubmit, setValue, formState: {
    errors
  } } = useForm();

  const navigate = useNavigate();

  const params = useParams();

  const { createTask, getTask, updateTask } = useTask();


  useEffect(() => {
    const getTaskById = async () => {
      if (params.idtask) {
        const task = await getTask(params.idtask);
        setValue('title', task.title);
        setValue('description', task.description);
        setValue('date', dayjs(task.date).utc().format('YYYY-MM-DD'));
      } else {
        setValue('title', '');
        setValue('description', '');
        setValue('date', '');
      }
    }
    getTaskById();
  }, [params.idtask]);

  const formOnSubmit = handleSubmit(async (data) => {
    if (params.idtask) {
      await updateTask(params.idtask, {
        ...data,
        date: dayjs.utc(data.date).format()
      });
    } else {
      await createTask({
        ...data,
        date: dayjs.utc(data.date).format()
      });
    }
    navigate('/task');
  });

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row d-flex justify-content-center mt-3">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">

            <div className="card border-primary">
              <div className="card-header text-center">Task Add 📝</div>
              <div className="card-body">

                <form onSubmit={formOnSubmit} >

                  <div className="form-group">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Title"
                      autoComplete="off"
                      id='title'
                      {...register('title', { required: true })}
                    />
                    {errors.title && <p className='text-danger m-0 mt-1'>Title is required</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="description" className="form-label mt-1">Description</label>
                    <textarea type="text"
                      rows="3"
                      className="form-control"
                      placeholder="Description"
                      id='description'
                      {...register('description', { required: true })}
                    ></textarea>
                    {errors.description && <p className='text-danger m-0 mt-1'>Description is required</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input type="date"
                      className="form-control"
                      aria-describedby="date"
                      placeholder="date"
                      autoComplete="off"
                      id='date'
                      {...register('date', { required: true })}
                    />
                    {errors.date && <p className='text-danger m-0 mt-1'>Date is required</p>}
                  </div>

                  <button className="btn btn-outline-success mt-2" type="submit">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
