import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useTask } from '../context/TaskContext';
import { Navbar } from '../components/Navbar';
import { TaskCard } from './TaskCard';
import { Loading } from '../components/Loading';

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
                    isLoadingTasks && <Loading />
                }
                {
                    !isLoadingTasks && tasks.length === 0 && <Navigate to={'/task-add'} />
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
