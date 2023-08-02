import { Link } from 'react-router-dom';
import { useTaskContext } from '../contexts/TaskContext';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export const TaskCard = ({ task }) => {
    const { idtask, title, description, date, createdAt, complete } = task;

    const { completeTask, deleteTask } = useTaskContext();

    return (
        <>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className={'card border-' + (complete ? 'success' : 'danger') + ' border-2'}>
                    <div className="card-header">
                        <h4 className="card-title mt-1">{title}</h4>
                    </div>
                    <div className="card-body">
                        <textarea readOnly disabled className='form-control' value={description} rows="10"></textarea>
                        <h6 className="card-subtitle mb-3 text-muted mt-4">Date: {dayjs(date).utc().format('DD/MM/YYYY')}</h6>
                        <button type='button'
                            className={'btn btn-outline-' + (complete ? 'success' : 'danger') + ' me-1'}
                            onClick={() => completeTask(idtask)}
                        >
                            {complete ? 'Incomplete ⛔' : 'Completed ✅'}
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


                        <h6 className='card-subtitle mt-2 text-muted'>Created at: {dayjs(createdAt).utc().format('DD/MM/YYYY HH:mm:ss')}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
