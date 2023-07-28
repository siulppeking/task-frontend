import { useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext';

export const useTask = () => {

    const { tasks, loading, getTasks } = useTaskContext();

    useEffect(() => {
        getTasks()
    }, []);

    return {
        tasks,
        loading
    }
}
