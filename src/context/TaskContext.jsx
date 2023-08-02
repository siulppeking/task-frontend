import { createContext, useContext, useState } from "react";
import taskService from '../services/task.services';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    const getTasks = async () => {
        try {
            setLoading(true);
            const res = await taskService.getAll();
            setTasks(res.data);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    const createTask = async (task) => {
        try {
            setLoading(true);
            await taskService.create(task);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    const getTask = async (idtask) => {
        try {
            setLoading(true);
            const res = await taskService.getById(idtask);
            return res.data;
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    const updateTask = async (idtask, task) => {
        try {
            setLoading(true);
            await taskService.update(idtask, task);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    const deleteTask = async (id) => {
        try {
            setLoading(true);
            await taskService.delete(id);
            let newTasks = tasks.filter(task => task.idtask !== id);
            setTasks(newTasks);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }
    const completeTask = async (id) => {
        try {
            setLoading(true);
            await taskService.complete(id);
            const newTasks = [...tasks];
            const index = tasks.findIndex((task => task.idtask === id));
            newTasks[index].complete = !newTasks[index].complete;
            setTasks(newTasks);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            loading,
            getTasks,
            createTask,
            getTask,
            updateTask,
            deleteTask,
            completeTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}


export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTaskContext must be used within a TaskProvider");
    }
    return context;
}