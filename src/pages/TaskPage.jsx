import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useTask } from '../context/TaskContext';
import { Navbar } from '../components/Navbar';
import { TaskCard } from './TaskCard';

export const TaskPage = () => {

    const { tasks, isLoadingTasks, getTasks } = useTask();

    useEffect(() => {
        getTasks()
    }, []);

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                {
                    isLoadingTasks && <h3 className='text-center text-warning mt-1'>Loading tasks...</h3>
                }
                {
                    !isLoadingTasks && tasks.length === 0 && <Navigate to={'/task-add'} />
                    // <div className="alert alert-info mt-3">
                    //     <strong>Information! Tasks not found</strong>
                    //     <Link to={'/task-add'} className='alert-link'> Add Task</Link>
                    // </div>
                }
                {
                    !isLoadingTasks && tasks.length > 0 &&
                    <div className="row g-3 mt-1">
                        {
                            tasks.map(task => <TaskCard key={task.idtask} task={task} />)
                        }
                    </div>
                }
            </div>
        </>
    )
}
