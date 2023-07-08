import { createContext, useContext, useState } from "react";
import taskService from '../services/task.services';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [isLoadingTasks, setIsLoadingTasks] = useState(true);

    const getTasks = async () => {
        try {
            const res = await taskService.getAll();
            setTasks(res.data);
            setIsLoadingTasks(false);
        } catch (error) {
            console.log(error)
        }
    }

    const createTask = async (task) => {
        try {
            const res = await taskService.create(task);
        } catch (error) {
            console.log(error)
        }
    }

    const getTask = async (idtask) => {
        try {
            const res = await taskService.getById(idtask);
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }

    const updateTask = async (idtask, task) => {
        try {
            const res = await taskService.update(idtask, task);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTask = async (id) => {
        try {
            const res = await taskService.delete(id);
            if (res.status === 200) {
                let newTasks = tasks.filter(task => task.idtask !== id);
                setTasks(newTasks);
            }
        } catch (error) {
            console.log(error)
        }
    }
    const completeTask = async (id) => {
        try {
            const res = await taskService.complete(id);
            const newTasks = [...tasks];
            const index = tasks.findIndex((task => task.idtask === id));
            newTasks[index].complete = !newTasks[index].complete;
            setTasks(newTasks);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            isLoadingTasks,
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


export const useTask = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTask must be used within a TaskProvider");
    }
    return context;
}