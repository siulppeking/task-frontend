import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage, TaskPage, TaskForm, HomePage } from './pages';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRouters } from './ProtectedRouters';
import { TaskProvider } from './contexts/TaskContext';

export const TaskApp = () => {
    return (
        <>
            <AuthProvider>
                <TaskProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/register" element={<RegisterPage />} />

                            <Route element={<ProtectedRouters />}>
                                <Route path="/task" element={<TaskPage />} />
                                <Route path="/task-add" element={<TaskForm />} />
                                <Route path="/task/:idtask" element={<TaskForm />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </TaskProvider>
            </AuthProvider>

        </>
    )
}
