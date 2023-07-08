import { Link } from 'react-router-dom';
import { useTask } from '../context/TaskContext';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export const TaskCard = ({ task }) => {
    const { idtask, title, description, date, createdAt, complete } = task;

    const { completeTask, deleteTask } = useTask();

    return (
        <>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className={complete ? 'card border-success' : 'card border-danger'}>
                    <div className="card-header">
                        <h4 className="card-title mt-1">{title}</h4>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{description}</p>
                        <h6 className="card-subtitle mb-3 text-muted">Date: {dayjs(task.date).utc().format('DD/MM/YYYY')}</h6>

                        <button type='button'
                            className={complete ? 'btn btn-outline-danger me-1' : 'btn btn-outline-success me-1'}
                            onClick={() => completeTask(idtask)}
                        >
                            {complete ? 'Incompleted ⛔' : 'Completed ✅'}
                        </button>
                        {
                            !complete &&
                            <>
                                <Link to={'/task/' + idtask} className="btn btn-outline-warning me-1"
                                >Edit ✏️
                                </Link>
                                <button type='button' className="btn btn-outline-danger"
                                    onClick={() => deleteTask(idtask)}
                                >Delete 🗑️
                                </button>
                            </>
                        }


                        <h6 className='card-subtitle mt-2 text-muted'>Create at: {dayjs(task.createdAt).utc().format('DD/MM/YYYY HH:mm:ss')}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
