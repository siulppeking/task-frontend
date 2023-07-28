import { Navigate } from 'react-router-dom';
import { TaskCard } from './TaskCard';
import { Loading } from '../components/Loading';
import { useTask } from '../hooks/useTask';
import { Navbar } from '../components/Navbar';

export const TaskPage = () => {

    const { tasks, loading } = useTask();

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                {
                    loading && <Loading />
                }
                {
                    !loading && tasks.length === 0 && <Navigate to={'/task-add'} />
                }
                <div className="row g-3 mt-1">
                    {
                        tasks.map(task => <TaskCard key={task.idtask} task={task} />)
                    }
                </div>
            </div>
        </>
    )
}
