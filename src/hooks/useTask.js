import { useEffect } from 'react';
import { useTaskContext } from '../contexts/TaskContext';

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
